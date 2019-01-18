#!/bin/bash
set -eu -o pipefail

# Set up env variables
export AIO_CIRCLE_CI_TOKEN=UNUSED_CIRCLE_CI_TOKEN
export AIO_GITHUB_TOKEN=$(head -c -1 /aio-secrets/GITHUB_TOKEN 2>/dev/null)
export AIO_AUTH0_CLIENT_SECRET=$(head -c -1 /aio-secrets/AUTH0_CLIENT_SECRET 2>/dev/null)
export AIO_AUTH0_PASSWORD=$(head -c -1 /aio-secrets/AUTH0_PASSWORD 2>/dev/null)
export AIO_AUTH0_USERNAME=$(head -c -1 /aio-secrets/AUTH0_USERNAME 2>/dev/null)
export AIO_AUTH0_SCOPE=$(head -c -1 /aio-secrets/AUTH0_SCOPE 2>/dev/null)

# Run the clean-up
node $AIO_SCRIPTS_JS_DIR/dist/lib/clean-up >> /var/log/aio/clean-up.log 2>&1
