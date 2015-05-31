var exec = require('child_process');
//
var p = exec.spawn('casperjs', [
    './test/server/screenshot.js',
    'http://www.yes24.com/24/goods/8595570?scode=032&OzSrank=3',
    '#mainPic',
    '#contents_constitution_text0',
    'yes24'
]);
//
// stdout, stderr 각자 처리하길 바란다.
// 여기서는 대충
//
p.stdout.on('data', function(data) {
    console.log(data.toString());
});
//
// exit 이벤트에 함수를 걸자
//
p.on('exit', function () {
    console.log('exit ===========');
    console.log(arguments);

});
