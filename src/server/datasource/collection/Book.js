var mongoose = require( "mongoose" ),
    logger = require( "../../logger" );

var BookSchema = mongoose.Schema({
    title: String,
    subtitle: String,
    url: String,
    createdAt: Date,
    modifiedAt: Date
});

var CouBook = mongoose.model( "CouBook", BookSchema );

logger.log( "BookSchema Loaded." );

module.exports = CouBook;