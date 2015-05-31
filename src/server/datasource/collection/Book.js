var mongoose = require( "mongoose" ),
    SiteImage = require( "./SiteImage"),
    logger = require( "../../logger" );

var BookSchema = mongoose.Schema({
    title: String,
    subtitle: String,
    url: String,
    createdAt: Date,
    modifiedAt: Date,
    children: [SiteImage]
});

var CouBook = mongoose.model( "CouBook", BookSchema );

logger.log( "BookSchema Loaded." );

module.exports = CouBook;