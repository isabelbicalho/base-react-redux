import { createStore } from 'redux';

const INITIAL_STATE = {
  data: ['Tweet redux 1', 'Tweet redux 2'],
};

function tweetsReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_TWEET':
      return {...state, data: [...state.data, action.text]};
    default:
      return state;
  }
}

const store = createStore(tweetsReducer);

export default store;
