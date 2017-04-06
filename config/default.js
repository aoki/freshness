/*
global GITHUB_API_TOKEN
global GITHUB_API_URL
global TARGET_ORG_LIST
*/

export default {
  github:{
    target: {
      // users: ['ringohub'],
      organizations: TARGET_ORG_LIST.replace(/\s/g,'').split(',')
    }
  }
}

export const reposUrl = (orgName) => { return `${GITHUB_API_URL}/orgs/${orgName}/repos?per_page=100`; }
export const prsUrl = (orgName, repoName) => { return `${GITHUB_API_URL}/repos/${orgName}/${repoName}/pulls?per_page=100`; };
export const orgUrl = orgName => {
  return `${GITHUB_API_URL}/orgs/${orgName}`;
};
export const GITHUB_TOKEN = GITHUB_API_TOKEN;
export const config = { headers: {Authorization: `token ${GITHUB_TOKEN}`} };
