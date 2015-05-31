/** @jsx React.DOM */
require('materialize-css');
var $ = require('jquery'),
    React = require('react'),
    AmdModule = require('amd-module'),
    CommonJSModule = require('commonjs-module'),
    ComponentContainer = require('./components/ComponentContainer.js');

var amd = new AmdModule();
var commonjs = new CommonJSModule();

React.render(
    <ComponentContainer></ComponentContainer>,
    document.body
);


console.log('today', new Date());
console.log('jquery enabled', !!$);
console.log('react enabled', !!React);
console.log(amd.message);
console.log(commonjs.message);