# docker build -t theia-ide -f browser-custom.Dockerfile .
# Option 1a: Mount user's home directory
# docker run -p=7777:7777 -v="$HOME:/home/project" --rm theia-ide

# Option 1b: Mount a specific local directory (recommended)
# docker run -p=7777:7777 -v="$(pwd)/workspace:/home/project" --rm theia-ide

# Option 1c: Mount user's Documents folder
# docker run -p=7777:7777 -v="$HOME/Documents/GitHub:/home/project" --rm theia-ide
# wsl -d Ubuntu-24.04 bash -c "cd /mnt/c/Users/kharper/Documents/GitHub/0xAutheo/theia && sh ./run-theia-home.sh"
# wsl -d Ubuntu-24.04 bash -c "cd /mnt/c/Users/kharper/Documents/GitHub/0xAutheo/theia && sh ./run-theia-ipfs.sh"

docker run -p=7777:7777 -v="$HOME/Documents/GitHub:/home/project" --rm theia-ide
