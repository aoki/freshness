import * as ActionTypes from '../constants/action-types';

const initialState = { prs: [], orgs: '', repo: ''};

export default function(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.RECIEVE_PULL_REQUESTS:
      return {
        prs: action.prs,
        repo: action.repo
      };
    default:
      return state;
  }
}
