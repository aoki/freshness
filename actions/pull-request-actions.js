import * as ActionType from '../constants/action-types';
import * as GitHub from '../config/default';
import 'isomorphic-fetch';

import * as log from '../debug/log'

export function recieveRepositories(repos) {
  return {
    type: ActionType.RECIEVE_REPOSITORIES,
    repos
  }
}

const authHeader = {headers: {
  Authorization: `token ${GitHub.GITHUB_TOKEN}`
}};

export function gerRepositories(org) {
  return async dispatch => {

    const repos = await fetch(GitHub.reposUrl(org), authHeader).then(
      res => {
        return res.json();
      }
    );

    const prs = (await Promise.all(
      repos.map(async repo => {
        const res = await fetch(GitHub.prsUrl(org, repo.name), authHeader)
        const prs = await res.json();
        return {pullRequests: prs, repository: repo};
      })
    )).filter(e => {return e.pullRequests.length !== 0});

    const action = recieveRepositories(prs);
    action.org = org;
    dispatch(action);
  }
}
