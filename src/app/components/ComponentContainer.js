/** @jsx React.DOM */
var React = require('react');

require('materialize-css');

var Header = require('./Header.js'),
    Navigation = require('./Navigation.js');
    BookFinder = require('./BookFinder.js');
module.exports = React.createClass({
    render: function () {
        return (
            <div className="container">
                <Header/>
                <Navigation/>
                <BookFinder/>
            </div>
        );
    }
});