docker build -t theia-ide -f browser-custom.Dockerfile .
docker run -p=7777:7777 --rm theia-ide
