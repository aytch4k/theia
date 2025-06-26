# Theia IDE Workspace Configuration

This document explains how to configure Theia IDE to use different workspace locations instead of the default Docker container workspace.

## Available Workspace Options

### 1. Local Directory Workspace (Default - Port 7777)
Uses a local `./workspace` directory that persists on your host machine.

```bash
./run-theia-local.sh
```
- **URL**: http://localhost:7777
- **Workspace**: `./workspace` directory in your project
- **Persistence**: Files are saved to your local filesystem

### 2. Home Directory Workspace (Port 7776)
Mounts your entire home directory as the workspace.

```bash
./run-theia-home.sh
```
- **URL**: http://localhost:7776
- **Workspace**: Your entire home directory (`$HOME`)
- **Persistence**: Files are saved to your home directory
- **⚠️ Warning**: This gives Theia access to your entire home directory

### 3. IPFS Workspace (Port 7778)
Uses IPFS with MFS (Mutable File System) for distributed, decentralized file storage.

```bash
./run-theia-ipfs.sh
```
- **URL**: http://localhost:7778
- **Workspace**: Stored on IPFS using MFS
- **Persistence**: Files are stored on IPFS and synced automatically
- **Requirements**: IPFS node running on localhost

## IPFS Setup Requirements

Before using the IPFS workspace option, ensure you have IPFS running locally:

### Install IPFS
```bash
# Download and install IPFS
wget https://dist.ipfs.tech/kubo/v0.24.0/kubo_v0.24.0_linux-amd64.tar.gz
tar -xzf kubo_v0.24.0_linux-amd64.tar.gz
cd kubo
sudo bash install.sh
```

### Initialize and Start IPFS
```bash
# Initialize IPFS (first time only)
ipfs init

# Start IPFS daemon
ipfs daemon
```

### IPFS Ports
Your IPFS node should be accessible on:
- **Port 5002**: WebUI (http://localhost:5002)
- **Port 4002**: API (http://localhost:4002)
- **Port 8001**: Gateway (http://localhost:8001)

## How IPFS Workspace Works

1. **Initialization**: When starting with IPFS, the system creates a workspace in IPFS MFS called `theia-workspace`
2. **Sync Down**: Files are downloaded from IPFS to the container's local workspace
3. **Background Sync**: Every 30 seconds, local changes are uploaded back to IPFS MFS
4. **Persistence**: Your workspace is stored on IPFS and can be accessed from any IPFS node

## File Structure Changes

### Modified Files
- [`browser-custom.Dockerfile`](browser-custom.Dockerfile): Added IPFS support and flexible port configuration
- [`run-theia-ide.sh`](run-theia-ide.sh): Updated with workspace mounting options
- [`scripts/docker-entrypoint.sh`](scripts/docker-entrypoint.sh): New entrypoint with IPFS and port support
- [`scripts/init-ipfs-workspace.sh`](scripts/init-ipfs-workspace.sh): IPFS workspace initialization script

### New Files
- [`run-theia-local.sh`](run-theia-local.sh): Run with local workspace (port 7777)
- [`run-theia-home.sh`](run-theia-home.sh): Run with home directory (port 7776)
- [`run-theia-ipfs.sh`](run-theia-ipfs.sh): Run with IPFS workspace (port 7778)

## Usage Examples

### Quick Start with Local Workspace
```bash
# Create and use local workspace
./run-theia-local.sh
# Access at http://localhost:7777
```

### Development with Home Directory
```bash
# Use your home directory as workspace
./run-theia-home.sh
# Access at http://localhost:7776
```

### Distributed Development with IPFS
```bash
# Start IPFS daemon first
ipfs daemon &

# Run Theia with IPFS workspace
./run-theia-ipfs.sh
# Access at http://localhost:7778
```

## Environment Variables

- `USE_IPFS_WORKSPACE`: Set to `true` to enable IPFS workspace
- `THEIA_PORT`: Port number for Theia to listen on (default: 7777)

## Troubleshooting

### IPFS Connection Issues
- Ensure IPFS daemon is running: `ipfs daemon`
- Check IPFS API is accessible: `curl http://localhost:4002/api/v0/version`
- Verify Docker can reach host: The container uses `host.docker.internal` to access your local IPFS

### Port Conflicts
- Local workspace: 7777
- Home directory: 7776  
- IPFS workspace: 7778
- Make sure these ports are not in use by other applications

### Permission Issues
- Ensure the workspace directory has proper permissions
- For home directory mounting, be aware of file ownership changes