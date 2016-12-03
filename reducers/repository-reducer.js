import * as ActionTypes from '../constants/action-types';

const initialState = { repos: [] };

export default function(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.RECIEVE_REPOSITORIES:
      return {repos: action.repos};
    default:
      return state;
  }
}
