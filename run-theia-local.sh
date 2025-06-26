#!/bin/bash

# Run Theia IDE with local workspace mounting

echo "Building Theia IDE..."
docker build -t theia-ide -f browser-custom.Dockerfile .

echo "Starting Theia IDE with local workspace..."
echo "Workspace will be mounted from: $(pwd)/workspace"

# Create workspace directory if it doesn't exist
mkdir -p ./workspace

# Run with local workspace mount
docker run -p=7777:7777 \
    -v="$(pwd)/workspace:/home/project" \
    --rm \
    --name theia-ide \
    theia-ide

echo "Theia IDE is running at http://localhost:7777"