var mongoose = require( "mongoose" ),
    logger = require( "../../logger" );

var SiteImageSchema = mongoose.Schema({
    url: String,
    selector: String,
    encode: String,
    createdAt: Date,
    modifiedAt: Date
});

var SiteImage = mongoose.model( "[Schema] SiteImage", SiteImageSchema );

logger.log( "SiteImageSchema Loaded." );

module.exports = SiteImage;