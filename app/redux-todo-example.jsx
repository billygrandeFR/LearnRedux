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

var store = redux.createStore(reducer, redux.compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

store.subscribe(() => {
  var state = store.getState();
  console.log('Search text is: ', state.searchText);
});

store.dispatch({type: 'CHANGE_SEARCH_TEXT', searchText: 'Kevin'});
store.dispatch({type: 'CHANGE_SEARCH_TEXT', searchText: 'Damian'});
store.dispatch({type: 'CHANGE_SEARCH_TEXT', searchText: 'Timothy'});
store.dispatch({type: 'CHANGE_SEARCH_TEXT', searchText: 'Danni'});
