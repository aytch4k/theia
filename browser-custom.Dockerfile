# Builder stage
FROM node:20-bullseye AS build-stage

# install required tools to build the application
RUN apt-get update && apt-get install -y libxkbfile-dev libsecret-1-dev

WORKDIR /home/theia

# Copy repository files
COPY . .

# Remove unnecesarry files for the browser application
# Download plugins and build application production mode
# Use yarn autoclean to remove unnecessary files from package dependencies
RUN yarn config set network-timeout 600000 -g && \
    yarn --pure-lockfile && \
    yarn build:extensions && \
    yarn download:plugins && \
    yarn browser build && \
    yarn && \
    yarn autoclean --init && \
    echo *.ts >> .yarnclean && \
    echo *.ts.map >> .yarnclean && \
    echo *.spec.* >> .yarnclean && \
    yarn autoclean --force && \
    yarn cache clean && \
    rm -rf .git applications/electron theia-extensions/launcher theia-extensions/updater node_modules

# Production stage uses a small base image
FROM node:20-bullseye-slim AS production-stage

# Create theia user and directories
# Application will be copied to /home/theia
# Default workspace is located at /home/project
RUN adduser --system --group theia
RUN chmod g+rw /home && \
    mkdir -p /home/project && \
    chown -R theia:theia /home/theia && \
    chown -R theia:theia /home/project;

# Install required tools for application: Temurin JDK, JDK, SSH, Bash, Maven, IPFS
# Node is already available in base image
RUN apt-get update && apt-get install -y wget apt-transport-https curl && \
    apt-get update && apt-get install -y git openssh-client openssh-server bash libsecret-1-0 openjdk-17-jdk maven && \
    # Install IPFS
    wget https://dist.ipfs.tech/kubo/v0.24.0/kubo_v0.24.0_linux-amd64.tar.gz && \
    tar -xzf kubo_v0.24.0_linux-amd64.tar.gz && \
    cd kubo && \
    bash install.sh && \
    cd .. && \
    rm -rf kubo kubo_v0.24.0_linux-amd64.tar.gz && \
    apt-get purge -y wget && \
    apt-get clean

ENV HOME /home/theia
WORKDIR /home/theia

# Copy application from builder-stage
COPY --from=build-stage --chown=theia:theia /home/theia /home/theia

# Copy IPFS initialization script and entrypoint
COPY --chown=theia:theia scripts/init-ipfs-workspace.sh /home/theia/init-ipfs-workspace.sh
COPY --chown=theia:theia scripts/docker-entrypoint.sh /home/theia/docker-entrypoint.sh
RUN chmod +x /home/theia/init-ipfs-workspace.sh && \
    chmod +x /home/theia/docker-entrypoint.sh

# Expose multiple ports for different configurations
EXPOSE 7776 7777 7778

# Specify default shell for Theia and the Built-In plugins directory
ENV SHELL=/bin/bash \
    THEIA_DEFAULT_PLUGINS=local-dir:/home/theia/plugins

# Use installed git instead of dugite
ENV USE_LOCAL_GIT true

# Swtich to Theia user
USER theia
WORKDIR /home/theia/applications/browser

# Launch the backend application via custom entrypoint
ENTRYPOINT [ "/home/theia/docker-entrypoint.sh" ]

# Arguments passed to the application - using port 7777 instead of 3000
CMD [ "/home/project", "--hostname=0.0.0.0", "--port=7777" ]