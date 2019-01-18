# VM Setup - Set up secrets


## Overview

Necessary secrets:

1. `GITHUB_TOKEN`
   - Used for:
     - Retrieving open PRs without rate-limiting.
     - Retrieving PR info, such as author, labels, changed files.
     - Retrieving members of the trusted GitHub teams.
     - Posting comments with preview links on PRs.

2. `CIRCLE_CI_TOKEN`
   - Used for:
     - Retrieving build information.
     - Downloading build artifacts.

3. `AUTH0_CLIENT_SECRET`, `AUTH0_PASSWORD`, `AUTH0_USERNAME`, `AUTH0_SCOPE`
   - Used for:
    - Retrieving access token to hit back-end api

## Create secrets

1. `GITHUB_TOKEN`
   - Visit https://github.com/settings/tokens.
   - Generate new token with the `public_repo` scope.

2. `CIRCLE_CI_TOKEN`
   - Visit https://circleci.com/gh/angular/angular/edit#api.
   - Create an API token with `Build Artifacts` scope.

3. `AUTH0_CLIENT_SECRET`, `AUTH0_PASSWORD`, `AUTH0_USERNAME`, `AUTH0_SCOPE`
   - Visit https://auth0.com
   - Navigate to the client you wish to auth to. Grab client secret.
   - Username and passwords must be valid for your connection.
   - Grab the scopes for the API

## Save secrets on the VM

- `sudo mkdir /aio-secrets`
- `sudo touch /aio-secrets/GITHUB_TOKEN`
- Insert `<github-token>` into `/aio-secrets/GITHUB_TOKEN`.
- `sudo touch /aio-secrets/CIRCLE_CI_TOKEN`
- Insert `<access-token>` into `/aio-secrets/CIRCLE_CI_TOKEN`.
- `sudo chmod 400 /aio-secrets/*`
- Insert `<access-token>` into `/aio-secrets/CIRCLE_CI_TOKEN`.
- `sudo chmod 400 /aio-secrets/*`
- Insert `<access-token>` into `/aio-secrets/AUTH0_CLIENT_SECRET`.
- `sudo chmod 400 /aio-secrets/*`
- Insert `<access-token>` into `/aio-secrets/AUTH0_PASSWORD`.
- `sudo chmod 400 /aio-secrets/*`
- Insert `<access-token>` into `/aio-secrets/AUTH0_USERNAME`.
- `sudo chmod 400 /aio-secrets/*`
- Insert `<access-token>` into `/aio-secrets/AUTH0_SCOPE`.
- `sudo chmod 400 /aio-secrets/*`