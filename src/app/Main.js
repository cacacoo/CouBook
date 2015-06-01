/** @jsx React.DOM */
require('materialize-css');
var $ = require('jquery'),
    React = require('react'),
    AmdModule = require('./components/service/amd-module'),
    CommonJSModule = require('./components/service/commonjs-module'),
    ComponentContainer = require('./components/ui/ComponentContainer.js');

var injectTapEventPlugin = require('react-tap-event-plugin');

var amd = new AmdModule();
var commonjs = new CommonJSModule();

React.render(
    <ComponentContainer></ComponentContainer>,
    document.querySelector('[data-view]')
);


console.log('today', new Date());
console.log('jquery enabled', !!$);
console.log('react enabled', !!React);
console.log(amd.message);
console.log(commonjs.message);