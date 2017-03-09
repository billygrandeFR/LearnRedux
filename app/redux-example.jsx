var redux = require('redux');

console.log('starting redux example');

var stateDefault = {
  name: 'Anonymous',
  hobbies: [],
  movies: []
};

var nextHobbyId = 1;
var nextMovieId = 1;

// var oldReducer = (state = stateDefault, action) => {
//   // state = state || {name: 'Anonymous'};
//
//     switch (action.type) {
//       case 'CHANGE_NAME':
//       return {
//         ...state,
//         name: action.name
//       };
//
//       case 'ADD_HOBBY':
//       return {
//         ...state,
//         hobbies: [
//           ...state.hobbies,
//           {
//             id: nextHobbyId++,
//             hobby: action.hobby
//           }
//         ]
//       };
//
//       case 'REMOVE_HOBBY':
//       return {
//         ...state,
//         hobbies: state.hobbies.filter((hobby) => hobby.id !== action.id)
//       };
//
//       case 'ADD_MOVIE':
//       return {
//         ...state,
//         movies: [
//           ...state.movies,
//           {
//             id: nextMovieId++,
//             movie: action.movie,
//             genre: action.genre
//           }
//         ]
//       };
//
//       case 'REMOVE_MOVIE':
//       return {
//         ...state,
//         movies: state.movies.filter((movie) => movie.id !== action.id)
//       };
//
//       default: return state;
//     }
// };
// name reducer and action generators
// -----------------------------------------

var nameReducer = (state = 'Anonymous', action) => {
  switch(action.type) {
    case 'CHANGE_NAME':
    return action.name;

    default: return state;
  };
};

var changeName = (name) => {
  return {
    type: 'CHANGE_NAME',
    name
  }
};
// hobbies reducer and action generators
// --------------------------------------

var hobbiesReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_HOBBY':
    return [...state,
    {
      id: nextHobbyId++,
      hobby: action.hobby
    }
  ];

  case 'REMOVE_HOBBY':
  return state.filter((hobby) => hobby.id !== action.id)

  default: return state;
  }
};
// action generators
var addHobby = (hobby) => {
  return {
    type: 'ADD_HOBBY',
    hobby
  }
};
var removeHobby = (id) => {
  return {
    type: 'REMOVE_HOBBY',
    id
  }
};
// movies reducer and action generators
// ----------------------------------------------

var moviesReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_MOVIE':
    return [...state,
    {
      id: nextMovieId++,
      movie: action.movie,
      genre: action.genre
    }];

    case 'REMOVE_MOVIE':
    return state.filter((movie) => movie.id !== action.id )

    default: return state;
  }
};

var addMovie = (movie, genre) => {
  return {
    type: 'ADD_MOVIE',
    movie,
    genre
  }
};
var removeMovie = (id) => {
  return {
    type: 'REMOVE_MOVIE',
    id
  }
};
// Combine

var reducer = redux.combineReducers({
  name: nameReducer,
  hobbies: hobbiesReducer,
  movies: moviesReducer

})

var store = redux.createStore(reducer, redux.compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

// subscribe to changes

// var unsubscribe =
store.subscribe (() => {
  var state = store.getState();
  console.log('name is: ', state.name);
});



store.dispatch(changeName('David'));

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

store.dispatch(addHobby('Nosy'));
store.dispatch(addHobby('People'));
store.dispatch(removeHobby(4));
store.dispatch(addMovie('Get', 'Lost'));
store.dispatch(removeMovie(2));
