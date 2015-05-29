require('materialize-css');
var $ = require('jquery'),
    react = require('react'),
    AmdModule = require('amd-module'),
    CommonJSModule = require('commonjs-module');

require('materialize');

var amd = new AmdModule();
var commonjs = new CommonJSModule();

console.log('today', new Date());
console.log('jquery enabled?', !!$);
console.log('react enabled?', !!react);
console.log(amd.message);
console.log(commonjs.message);