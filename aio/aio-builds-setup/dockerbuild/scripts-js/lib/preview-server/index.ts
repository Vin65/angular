// Imports
import {AIO_DOWNLOADS_DIR} from '../common/constants';
import {
  AIO_ARTIFACT_MAX_SIZE,
  AIO_ARTIFACT_PATH,
  AIO_AUTH0_AUDIENCE,
  AIO_AUTH0_CLIENT_ID,
  AIO_AUTH0_CLIENT_SECRET,
  AIO_AUTH0_DOMAIN,
  AIO_AUTH0_GRANT_TYPE,
  AIO_AUTH0_PASSWORD,
  AIO_AUTH0_REALM,
  AIO_AUTH0_SCOPE,
  AIO_AUTH0_USERNAME,
  AIO_BUILDS_DIR,
  AIO_CIRCLE_CI_TOKEN,
  AIO_DOMAIN_NAME,
  AIO_GITHUB_ORGANIZATION,
  AIO_GITHUB_REPO,
  AIO_GITHUB_TEAM_SLUGS,
  AIO_GITHUB_TOKEN,
  AIO_PREVIEW_SERVER_HOSTNAME,
  AIO_PREVIEW_SERVER_PORT,
  AIO_SIGNIFICANT_FILES_PATTERN,
  AIO_TRUSTED_PR_LABEL,
} from '../common/env-variables';
import {PreviewServerFactory} from './preview-server-factory';

// Run
_main();

// Functions
function _main(): void {
  PreviewServerFactory
    .create({
      auth0Audience: AIO_AUTH0_AUDIENCE,
      auth0ClientId: AIO_AUTH0_CLIENT_ID,
      auth0ClientSecret: AIO_AUTH0_CLIENT_SECRET,
      auth0Domain: AIO_AUTH0_DOMAIN,
      auth0GrantType: AIO_AUTH0_GRANT_TYPE,
      auth0Password: AIO_AUTH0_PASSWORD,
      auth0Realm: AIO_AUTH0_REALM,
      auth0Scope: AIO_AUTH0_SCOPE,
      auth0Username: AIO_AUTH0_USERNAME,
      buildArtifactPath: AIO_ARTIFACT_PATH,
      buildsDir: AIO_BUILDS_DIR,
      circleCiToken: AIO_CIRCLE_CI_TOKEN,
      domainName: AIO_DOMAIN_NAME,
      downloadSizeLimit: AIO_ARTIFACT_MAX_SIZE,
      downloadsDir: AIO_DOWNLOADS_DIR,
      githubOrg: AIO_GITHUB_ORGANIZATION,
      githubRepo: AIO_GITHUB_REPO,
      githubTeamSlugs: AIO_GITHUB_TEAM_SLUGS.split(','),
      githubToken: AIO_GITHUB_TOKEN,
      significantFilesPattern: AIO_SIGNIFICANT_FILES_PATTERN,
      trustedPrLabel: AIO_TRUSTED_PR_LABEL,
    })
    .listen(AIO_PREVIEW_SERVER_PORT, AIO_PREVIEW_SERVER_HOSTNAME);
}
