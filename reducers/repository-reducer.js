import * as ActionTypes from '../constants/action-types';

const initialState = {};

export default function (state = initialState, action) {
  switch (action.type) {
    case ActionTypes.RECIEVE_REPOSITORIES:
      const repos = {};
      repos[action.org] = action.repos;
      return {
        ...state,
        ...repos
      };
    default:
      return state;
  }
}
