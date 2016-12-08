export default {
  github:{
    scheme: 'https',
    domain: 'api.github.com',
    apiEndPoint: '',
    target: {
      // users: ['ringohub'],
      organizations: ['dwango', 'dwango-js', 'opentoonz', 'asciidwango', 'nico-opendata']
    }
  }
}

export const GITHUB_API_URL = 'https://api.github.com';
export const reposUrl = (orgName) => { return `${GITHUB_API_URL}/orgs/${orgName}/repos?per_page=100`; }
export const prsUrl = (orgName, repoName) => { return `${GITHUB_API_URL}/repos/${orgName}/${repoName}/pulls?per_page=100`; };
export const GITHUB_TOKEN = '' // process.env.PR_GITHUB_TOKEN
export const config = { headers: {Authorization: `token ${GITHUB_TOKEN}`} };
