const githubApiUrl = process.env.FRESHNESS_GITHUB_API_URL || 'https://api.github.com';
const githubApiToken = process.env.FRESHNESS_GITHUB_API_TOKEN;
const targetOrgs = process.env.FRESHNESS_TARGET_ORGS || 'github,nodejs';
const execMode = process.env.NODE_ENV || 'prod';

console.log(`GitHub API URL:  ${githubApiUrl}`);
console.log(`Target organizations:  ${targetOrgs}`);
console.log(`Execution mode: ${execMode}`);

module.exports = {
  GITHUB_API_URL: githubApiUrl,
  GITHUB_API_TOKEN: githubApiToken,
  TARGET_ORG_LIST: targetOrgs,
  EXECUTION_MODE: execMode
};
