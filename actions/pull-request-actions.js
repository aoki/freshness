import * as ActionType from '../constants/action-types';
import * as GitHub from '../config/default';
import 'isomorphic-fetch';

import * as log from '../debug/log'

export function recievePullRequest(prs, org, repo) {
  return {
    type: ActionType.RECIEVE_PULL_REQUESTS,
    prs, repo
  };
}

export function getPullRequests(org, repo) {
  return async dispatch => {
    const res = await fetch(GitHub.prsUrl(org, repo), {headers: {
      Authorization: `token ${GitHub.GITHUB_TOKEN}`
    }});
    const data = await res.json();
    const action = recievePullRequest(
      data.map(e => {return e.body;}),
      org, repo
    );
    // dispatch(action);
  };
}


export function recieveRepositories(repos, org) {
  return {
    type: ActionType.RECIEVE_REPOSITORIES,
    repos
  }
}

export function gerRepositories(org) {
  return async dispatch => {
    const res = await fetch(GitHub.reposUrl(org), {headers: {
      Authorization: `token ${GitHub.GITHUB_TOKEN}`
    }});
    const data = await res.json();
    const action = recieveRepositories(data.map(e => {return e.name;}), org);
    action.org = org;
    dispatch(action);
  }
}
