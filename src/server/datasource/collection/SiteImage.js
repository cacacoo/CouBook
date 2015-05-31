var mongoose = require( "mongoose" ),
    logger = require( "../../logger" );

var SiteImageSchema = mongoose.Schema({
    url: String,
    selector: String,
    encode: String,
    createdAt: Date,
    modifiedAt: Date
});

SiteImageSchema.pre('save', function (next) {
    if (!this.encode) return next(new Error('content is empty'));
    next();
});

var SiteImage = mongoose.model( "SiteImage", SiteImageSchema );

logger.log( "SiteImageSchema Loaded." );

module.exports = SiteImage;