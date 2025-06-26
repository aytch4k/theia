#!/bin/bash

# IPFS Workspace Initialization Script
# This script sets up an IPFS-based workspace for Theia IDE

IPFS_API_URL="http://host.docker.internal:5002"
WORKSPACE_DIR="/home/project"
IPFS_WORKSPACE_NAME="theia-workspace"

echo "Initializing IPFS workspace..."

# Function to check if IPFS is accessible
check_ipfs() {
    curl -s "$IPFS_API_URL/api/v0/version" > /dev/null
    return $?
}

# Function to create or get IPFS workspace
setup_ipfs_workspace() {
    # Check if workspace already exists in MFS
    if curl -s "$IPFS_API_URL/api/v0/files/ls?arg=/$IPFS_WORKSPACE_NAME" | grep -q "Type"; then
        echo "IPFS workspace '$IPFS_WORKSPACE_NAME' already exists"
    else
        echo "Creating new IPFS workspace '$IPFS_WORKSPACE_NAME'"
        # Create workspace directory in MFS
        curl -s -X POST "$IPFS_API_URL/api/v0/files/mkdir?arg=/$IPFS_WORKSPACE_NAME&parents=true"
        
        # Add a README file to initialize the workspace
        echo "# Theia IDE IPFS Workspace" > /tmp/README.md
        echo "This workspace is stored on IPFS using MFS (Mutable File System)" >> /tmp/README.md
        curl -s -X POST -F file=@/tmp/README.md "$IPFS_API_URL/api/v0/files/write?arg=/$IPFS_WORKSPACE_NAME/README.md&create=true"
        rm /tmp/README.md
    fi
}

# Function to sync IPFS workspace to local directory
sync_from_ipfs() {
    echo "Syncing workspace from IPFS..."
    mkdir -p "$WORKSPACE_DIR"
    
    # Get the workspace hash
    WORKSPACE_HASH=$(curl -s "$IPFS_API_URL/api/v0/files/stat?arg=/$IPFS_WORKSPACE_NAME" | grep -o '"Hash":"[^"]*"' | cut -d'"' -f4)
    
    if [ ! -z "$WORKSPACE_HASH" ]; then
        # Download workspace content
        curl -s "$IPFS_API_URL/api/v0/get?arg=$WORKSPACE_HASH" | tar -xf - -C "$WORKSPACE_DIR" --strip-components=1 2>/dev/null || true
        echo "Workspace synced from IPFS hash: $WORKSPACE_HASH"
    fi
}

# Function to sync local changes back to IPFS
sync_to_ipfs() {
    echo "Setting up sync to IPFS..."
    
    # Create a background process to periodically sync changes
    (
        while true; do
            sleep 30  # Sync every 30 seconds
            
            # Find all files in workspace and sync them
            find "$WORKSPACE_DIR" -type f | while read file; do
                relative_path=${file#$WORKSPACE_DIR/}
                if [ ! -z "$relative_path" ]; then
                    # Upload file to IPFS MFS
                    curl -s -X POST -F file=@"$file" "$IPFS_API_URL/api/v0/files/write?arg=/$IPFS_WORKSPACE_NAME/$relative_path&create=true&parents=true&truncate=true" > /dev/null 2>&1
                fi
            done
        done
    ) &
    
    echo "Background sync to IPFS started"
}

# Main execution
if check_ipfs; then
    echo "IPFS is accessible at $IPFS_API_URL"
    setup_ipfs_workspace
    sync_from_ipfs
    sync_to_ipfs
    echo "IPFS workspace setup complete!"
else
    echo "Warning: IPFS not accessible at $IPFS_API_URL"
    echo "Falling back to local workspace"
    mkdir -p "$WORKSPACE_DIR"
fi