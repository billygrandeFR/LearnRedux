var redux = require('redux');

var actions = require('./actions/index');
var store = require('./store/configureStore').configure();

console.log('starting redux example');

var stateDefault = {
  name: 'Anonymous',
  hobbies: [],
  movies: []
};

var unsubscribe = store.subscribe (() => {
  var state = store.getState();
  console.log('name is: ', state.name);

  if (state.map.isFetching) {
    document.getElementById('app').innerHTML = 'Loading...';
  } else if (state.map.url) {
    document.getElementById('app').innerHTML = '<a href="' + state.map.url + '" target="_blank">View your location</a>';
  }
});

store.dispatch(actions.fetchLocation());

store.dispatch(actions.changeName('David'));

store.dispatch({
  type: 'ADD_MOVIE',
  movie: 'Rambo',
  genre: 'Action'
});

store.dispatch({
  type: 'ADD_MOVIE',
  movie: 'Trump',
  genre: 'Thriller'
});

store.dispatch({
  type: 'ADD_HOBBY',
  hobby: 'Politics'
});

store.dispatch({
  type: 'ADD_HOBBY',
  hobby: 'Running'
});

// unsubscribe();

store.dispatch({
  type: 'CHANGE_NAME',
  name: 'Emily'
});

store.dispatch({
  type: 'REMOVE_HOBBY',
  id: 2
});

store.dispatch({
  type: 'REMOVE_MOVIE',
  id: 1
});

store.dispatch(actions.addHobby('Nosy'));
store.dispatch(actions.addHobby('People'));
store.dispatch(actions.removeHobby(4));
store.dispatch(actions.addMovie('Get', 'Lost'));
store.dispatch(actions.removeMovie(2));
