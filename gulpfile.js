/**
 * Created by 你猜 on 2017/10/15.
 */
var url = require('url');
var fs = require('fs');
var path = require('path');
var gulp = require('gulp');
var webserver = require('gulp-webserver');
gulp.task('server', function(){
   gulp.src('./Data')
       .pipe(webserver({
            host: 'localhost',
            port: 9000,
            livereload: {
               enable: true
            },
            open: true,
            directoryListing: {
                path: './',
                enable: true
            },
            middleware :function(req, res, next) {
                var urlObj = url.parse(req.url).query;
                var newUrl = path.join(__dirname, 'Data', urlObj + '.json');
                fs.exists(newUrl, function(exist){
                    if (!exist) {
                        res.writeHead(404, {
                            'Content-Type': 'text/json;charset=utf-8'
                        });
                        res.end('not find!');
                    } else {
                        fs.readFile(newUrl, function(err, data){
                            if (err) {
                                throw err;
                            }
                            res.writeHead(200, {
                                'Content-Type': 'text/json;charset=utf-8',
                                'Access-Control-Allow-Origin': 'http://localhost:63342'
                            });
                            res.end(data.toString());
                        })
                    }
                })
            }

       }))
});