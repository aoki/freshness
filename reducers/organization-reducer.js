import * as ActionTypes from '../constants/action-types';

const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.RECIEVE_ORGANIZATION:
      const org = {};
      org[action.orgInfo.orgName] = action.orgInfo;
      return {...org, ...state};
    default:
      return state;
  }
}
