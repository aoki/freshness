import fetch from 'isomorphic-fetch';

import * as ActionType from '../constants/action-types';
import * as GitHub from '../config/default';

export function recieveRepositories(repos) {
  return {
    type: ActionType.RECIEVE_REPOSITORIES,
    repos
  };
}

const authHeader = {headers: {
  Authorization: `token ${GitHub.GITHUB_TOKEN}`
}};

export function gerRepositories(org) {
  return async dispatch => {
    const reposRes = await fetch(GitHub.reposUrl(org), authHeader);
    const repos = await reposRes.json();

    const prs = (await Promise.all(
      repos.map(async repo => {
        const res = await fetch(GitHub.prsUrl(org, repo.name), authHeader);
        const prs = await res.json();
        return {pullRequests: prs, repository: repo};
      })
    )).filter(e => {
      return e.pullRequests.length !== 0;
    });

    const action = recieveRepositories(prs);
    action.org = org;
    dispatch(action);
  };
}
