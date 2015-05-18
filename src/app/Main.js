require([ './components/HelloWorld', '../../node_modules/jquery/dist/jquery'  ], function(Hello, $) {

    'use strict';

    var hello = new Hello();

    console.log(new Date(), $(window), hello.message);

});