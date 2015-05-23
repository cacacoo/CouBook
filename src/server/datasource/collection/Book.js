var mongoose = require('mongoose'),
    winston = require('winston');

var BookSchema = mongoose.Schema({
    title: String,
    subtitle: String,
    url: String,
    createdAt: Date,
    modifiedAt: Date
});

var CouBook = mongoose.model( 'CouBook', BookSchema );

winston.log( 'info', 'BookSchema Loaded.' );

module.exports = CouBook;