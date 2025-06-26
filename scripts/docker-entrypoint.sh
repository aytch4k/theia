#!/bin/bash

# Docker entrypoint script for Theia IDE with IPFS support

echo "Starting Theia IDE with workspace support..."

# Set default port if not specified
THEIA_PORT=${THEIA_PORT:-7777}

# Initialize IPFS workspace if enabled
if [ "$USE_IPFS_WORKSPACE" = "true" ]; then
    echo "IPFS workspace enabled"
    /home/theia/init-ipfs-workspace.sh
else
    echo "Using local workspace"
    mkdir -p /home/project
fi

# Start Theia IDE
echo "Starting Theia IDE on port $THEIA_PORT..."
exec node /home/theia/applications/browser/lib/backend/main.js "$1" "--hostname=0.0.0.0" "--port=$THEIA_PORT"