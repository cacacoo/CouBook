require('materialize-css');
var $ = require('jquery'),
    react = require('react'),
    Hello = require('HelloWorld');

var hello = new Hello();
console.log(new Date(), $(window), hello.message, react);