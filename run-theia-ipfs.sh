#!/bin/bash

# Run Theia IDE with IPFS workspace

echo "Building Theia IDE with IPFS support..."
docker build -t theia-ide -f browser-custom.Dockerfile .

echo "Starting Theia IDE with IPFS workspace..."
echo "IPFS API endpoints:"
echo "  - http://localhost:5002 (WebUI)"
echo "  - http://localhost:4002 (API)"
echo "  - http://localhost:8001 (Gateway)"

# Check if IPFS is running
if ! curl -s http://localhost:5002/api/v0/version > /dev/null; then
    echo "Warning: IPFS doesn't seem to be running on localhost:5002"
    echo "Please make sure your IPFS node is running before starting Theia"
    echo "You can start IPFS with: ipfs daemon"
    read -p "Continue anyway? (y/N): " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        exit 1
    fi
fi

# Run with IPFS workspace enabled
docker run -p=7778:7778 \
    -e USE_IPFS_WORKSPACE=true \
    -e THEIA_PORT=7778 \
    --add-host=host.docker.internal:host-gateway \
    --rm \
    --name theia-ide-ipfs \
    theia-ide

echo "Theia IDE with IPFS workspace is running at http://localhost:7778"