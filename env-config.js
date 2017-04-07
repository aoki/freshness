const prod = process.env.NODE_ENV === 'production'
const githubApiUrl    = process.env.FRESHNESS_GITHUB_API_URL    || 'https://api.github.com'
const githubApiToken  = process.env.FRESHNESS_GITHUB_API_TOKEN
const targetOrgs      = process.env.FRESHNESS_TARGET_ORGS       || 'github,nodejs'

console.log(`GitHub API URL:  ${githubApiUrl}`)
console.log(`Target organizations:  ${targetOrgs}`)

module.exports = {
  'GITHUB_API_URL': githubApiUrl,
  'GITHUB_API_TOKEN': githubApiToken,
  'TARGET_ORG_LIST': targetOrgs
}
