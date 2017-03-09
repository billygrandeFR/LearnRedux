var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');



// load foundation
require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation();
// Load css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <div>xxx</div>,
  document.getElementById('app')
);

// require('./redux-todo-example.jsx');
require('./redux-example.jsx');
