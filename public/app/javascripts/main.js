define(function(require){
    var Marionette = require("backbone.marionette"),
        AppRouter = require("Router"),
        Backbone = require("backbone"),
        domReady = require("domReady");

    domReady(function(){
        var myApp = new Marionette.Application();

        myApp.addInitializer(function(){
            new AppRouter();
            Backbone.history.start();


            this.commands.setHandler('view-list', function() {
                console.log(this);
            });

        });

        myApp.start();
    });
});