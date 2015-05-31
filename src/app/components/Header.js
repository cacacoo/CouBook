/** @jsx React.DOM */
var React = require('react');
require('materialize-css');
require('materialize');

module.exports = React.createClass({
    render: function(){
        return (
            <header className="row">
                <h1 className="header-title">CouBook <small>Book Management System</small></h1>
            </header>
        );
    }
});
