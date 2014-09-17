define(function(require){
    var Marionette = require("backbone.marionette"),
        AppRouter = require("Router"),
        Backbone = require("backbone"),
        domReady = require("domReady"),
        FilmCollectionView = require("FilmCollectionView"),
        FilmCollection = require("FilmCollection");

    domReady(function(){
        var myApp = new Marionette.Application({
            regions: {
                content: "#content"
            }
        });

        myApp.addInitializer(function(){
            new AppRouter();
            Backbone.history.start();


            this.commands.setHandler('view-list', function() {
                console.log('view-list');
            });
        });

        myApp.listenTo(myApp, 'start', function() {
            this.filmCollectionView = new FilmCollectionView({
                collection: new FilmCollection(),
                model: new Backbone.Model()
            });

            this.content.show(this.filmCollectionView);
        });

        myApp.start();
    });
});