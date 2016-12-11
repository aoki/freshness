import fetch from 'isomorphic-fetch';
import * as GitHub from '../config/default';
import * as ActionType from '../constants/action-types';

const recieve = orgInfo => {
  return {
    type: ActionType.RECIEVE_ORGANIZATION,
    orgInfo
  };
};

const authHeader = {headers: {
  Authorization: `token ${GitHub.GITHUB_TOKEN}`
}};

export function getOrganization(org) {
  return async dispatch => {
    const res = await fetch(GitHub.orgUrl(org), authHeader);
    const orgInfo = await res.json();
    const members = await fetch(orgInfo.members_url.replace(/{\/member}/, ''), authHeader);
    const membersInfo = await members.json();
    const ms = membersInfo.reduce((acc, e) => {
      acc[e.login] = e;
      return acc;
    }, {});
    orgInfo.orgName = org;
    orgInfo.members = ms;
    const action = recieve(orgInfo);
    dispatch(action);
  };
}
