export default {
  github:{
    scheme: 'https',
    domain: 'api.github.com',
    apiEndPoint: '',
    organizations: ['nodejs', 'zeit']
  }
}

export const GITHUB_API_URL = 'https://api.github.com';
export const reposUrl = (orgName) => { return `${GITHUB_API_URL}/orgs/${orgName}/repos?per_page=100`; }
export const prsUrl = (orgName, repoName) => { return `${GITHUB_API_URL}/repos/${orgName}/${repoName}/pulls?per_page=100`; };
// const GITHUB_TOKEN = process.env.GHE_TOKEN;
// export  const config = { headers: {Authorization: `token ${GITHUB_TOKEN}`} };
