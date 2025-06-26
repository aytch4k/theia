#!/bin/bash

# Run Theia IDE with user's home directory as workspace

echo "Building Theia IDE..."
docker build -t theia-ide -f browser-custom.Dockerfile .

echo "Starting Theia IDE with home directory workspace..."
echo "Workspace will be mounted from: $HOME"

# Run with home directory mount
docker run -p=7776:7776 \
    -e THEIA_PORT=7776 \
    -v="$HOME:/home/project" \
    --rm \
    --name theia-ide-home \
    theia-ide

echo "Theia IDE is running at http://localhost:7776"