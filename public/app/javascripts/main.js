define(function(require){
    var MyApp = require('Application'),
        domReady = require("domReady");

    domReady(function(){
        (new MyApp()).start();
    });
});