#!/bin/bash
set -eu -o pipefail

# Set up env variables for production
export AIO_CIRCLE_CI_TOKEN=$(head -c -1 /aio-secrets/CIRCLE_CI_TOKEN 2>/dev/null || echo "MISSING_CIRCLE_CI_TOKEN")
export AIO_GITHUB_TOKEN=$(head -c -1 /aio-secrets/GITHUB_TOKEN 2>/dev/null || echo "MISSING_GITHUB_TOKEN")
export AIO_AUTH0_CLIENT_SECRET=$(head -c -1 /aio-secrets/AUTH0_CLIENT_SECRET 2>/dev/null || echo "MISSING_AUTH0_CLIENT_SECRET")
export AIO_AUTH0_PASSWORD=$(head -c -1 /aio-secrets/AUTH0_PASSWORD 2>/dev/null || echo "MISSING_AUTH0_PASSWORD")
export AIO_AUTH0_USERNAME=$(head -c -1 /aio-secrets/AUTH0_USERNAME 2>/dev/null || echo "MISSING_AUTH0_USERNAME")
export AIO_AUTH0_SCOPE=$(head -c -1 /aio-secrets/AUTH0_SCOPE 2>/dev/null || echo "MISSING_AUTH0_SCOPE")

# Start the preview-server instance
action=$([ "$1" == "stop" ] && echo "stop" || echo "start")
pm2 $action $AIO_SCRIPTS_JS_DIR/dist/lib/preview-server \
  --uid $AIO_WWW_USER \
  --log /var/log/aio/preview-server-prod.log \
  --name aio-preview-server-prod \
  ${@:2}
