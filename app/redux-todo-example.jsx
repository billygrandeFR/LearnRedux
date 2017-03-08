var redux = require('redux');

console.log('Starting redux example');

var stateDefault = {
  searchText: '',
  showCompleted: false,
  todos: []
};

var reducer = (state = stateDefault, action) => {
  switch(action.type){
    case 'CHANGE_SEARCH_TEXT':
    return {
      ...state,
      searchText: action.searchText
    };
    default: return state;
  }

};

var store = redux.createStore(reducer);

console.log('currentState: ', store.getState());

var searchText = 'Kevin';

store.dispatch({type: 'CHANGE_SEARCH_TEXT', searchText: searchText});

console.log('worked? ', store.getState());
