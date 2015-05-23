var $ = require('jquery'),
    react = require('react'),
    Hello = require('./components/HelloWorld.js');

var hello = new Hello();
console.log(new Date(), $(window), hello.message, react);