var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/coubook');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
    console.log("connected!");

    var BookSchema = mongoose.Schema({
        title: String,
        subtitle: String,
        url: String,
        createdAt: Date,
        modifiedAt: Date
    });

    var CouBook = mongoose.model('CouBook', BookSchema);

    var meanStack = new CouBook({
        title: 'Node.js, MongoDB와 AngularJS를 이용한 웹 개발',
        subtitle: ': MEAN 스택을 이용한 강력한 인터랙티브 웹 앱 프로그래밍',
        url: 'http://www.yes24.com/24/goods/15614373?scode=032&OzSrank=1',
        createdAt: new Date,
        modifiedAt: new Date
    });

    meanStack.save(function (err, silence) {
        if (err) return console.error(err);

        CouBook.find(function (err, kittens) {
            if (err) return console.error(err);
            console.log(kittens)
        });

    });

});