import {GithubPullRequests, PullRequest} from '../common/github-pull-requests';
import {GithubTeams} from '../common/github-teams';
import {assertNotMissingOrEmpty} from '../common/utils';

/**
 * A helper to verify whether builds are trusted.
 */
export class BuildVerifier {
  /**
   * Construct a new BuildVerifier instance.
   * @param prs A helper to access PR information.
   * @param teams A helper to access Github team information.
   * @param allowedTeamSlugs The teams that are trusted.
   * @param trustedPrLabel The github label that indicates that a PR is trusted.
   */
  constructor(protected prs: GithubPullRequests, protected teams: GithubTeams,
              protected allowedTeamSlugs: string[], protected trustedPrLabel: string) {
    assertNotMissingOrEmpty('allowedTeamSlugs', allowedTeamSlugs && allowedTeamSlugs.join(''));
    assertNotMissingOrEmpty('trustedPrLabel', trustedPrLabel);
  }

  /**
   * Check whether a PR is trusted.
   * @param pr The number of the PR to check.
   * @returns true if the PR is trusted.
   */
  public async getPrIsTrusted(pr: number): Promise<boolean> {
    const prInfo = await this.prs.fetch(pr);
    return this.hasLabel(prInfo, this.trustedPrLabel) ||
           (await this.teams.isMemberBySlug(prInfo.user.login, this.allowedTeamSlugs));
  }

  protected hasLabel(prInfo: PullRequest, label: string): boolean {
    return prInfo.labels.some(labelObj => labelObj.name === label);
  }
}
