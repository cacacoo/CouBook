/** @jsx React.DOM */
var React = require('react'),
    ThemeManager = require('material-ui/lib/styles/theme-manager')(),
    Colors = require('material-ui/lib/styles/colors');

require('materialize-css');

var Header = require('./Header.js'),
    Navigation = require('./Navigation.js');
    BookFinder = require('./BookFinder.js');

module.exports = React.createClass({

    childContextTypes: {
        muiTheme: React.PropTypes.object
    },

    getChildContext: function() {
        return {
            muiTheme: ThemeManager.getCurrentTheme()
        };
    },

    componentWillMount: function() {
        ThemeManager.setPalette({
            accent1Color: Colors.deepOrange500
        });
    },

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