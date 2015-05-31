require('materialize-css');
var $ = require('jquery'),
    React = require('react'),
    AmdModule = require('amd-module'),
    CommonJSModule = require('commonjs-module'),
    AppComponent = require('AppComponent');

require('materialize');

var amd = new AmdModule();
var commonjs = new CommonJSModule();

$('select').material_select();
$('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 15 // Creates a dropdown of 15 years to control year
});

React.render(<AppComponent/>, document.getElementById('top'));


console.log('today', new Date());
console.log('jquery enabled', !!$);
console.log('react enabled', !!React);
console.log(amd.message);
console.log(commonjs.message);