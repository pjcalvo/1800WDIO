var webdriver = require('gulp-webdriver');
var gulp = require('gulp');
var ts = require("gulp-typescript");
var tsProject = ts.createProject("tsconfig.json");
var minimist = require('minimist');

var knownOptions = {
    string: 'baseUrl',
    default: { baseUrl : 'https://blue.1800contactstest.com' }
  };
  
  var options = minimist(process.argv.slice(2), knownOptions);

gulp.task("ts-compile", function () {
    return tsProject.src()
        .pipe(tsProject())
        .js.pipe(gulp.dest("src"));
});


gulp.task('test:e2e', function() {
    return gulp.src('wdio.conf.js').pipe(webdriver({
        capabilities : [
            {
                'browserName':'chrome',
                'chromeOptions':{
                    args : ['headless', 'disable-gpu']
                }
            }],
        baseUrl : options.baseUrl
        
    }));
});

gulp.task('test:e2e-cbt', function() {
    return gulp.src('wdio.conf.js').pipe(webdriver({
        logLevel: 'verbose',
        waitforTimeout: 20000,
        host: 'hub.crossbrowsertesting.com',
        port: 80,
        user: 'awan@1800contacts.com',
        key : 'u0e2547396b64173',
        bail:0,
        baseUrl : options.baseUrl,
        capabilities: [
            {
                'browserName':'Safari',
                'deviceName':'iPhone 7 Simulator',
                'platformVersion':'10.0',
                'platformName': 'iOS',
                'deviceOrientation':'portrait',
                'recordVideo': 'true',
                'name': 'WDIO - iPhone Test'
           },
           {
                'browserName':'Firefox',
                'version':'62',
                'platform':'WIndows 10',
                'screenResolution':'1280x1024',
                'recordVideo': 'true',
                'name': 'WDIO - Firefox Test'
            },
            {
                'browserName':'Chrome',
                'deviceName':'Galaxy S6',
                'platformVersion':'5.0',
                'platformName': 'Android',
                'deviceOrientation':'portrait',
                'recordVideo': 'true',
                'name': 'WDIO - Android Test'
           }
        ],

    }));
});

gulp.task('test-local', ['ts-compile', 'test:e2e']);
gulp.task('test-cbt', ['ts-compile', 'test:e2e-cbt']);