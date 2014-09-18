define(function(require){
    var Marionette = require("backbone.marionette"),
        AppRouter = require("Router"),
        Backbone = require("backbone"),
        domReady = require("domReady"),
        FilmCollectionView = require("FilmCollectionView"),
        FilmCollection = require("FilmCollection"),
        FullScreenFilmView = require("FullScreenFilmView");

    domReady(function(){
        var myApp = new Marionette.Application({
            regions: {
                content: "#content"
            }
        });

        myApp.addInitializer(function(){
            this.filmCollectionView = new FilmCollectionView({
                collection: new FilmCollection(),
                model: new Backbone.Model()
            });

            new AppRouter();
            Backbone.history.start();
        });

        myApp.listenTo(Backbone, 'view:edit-film', function(model) {
            this.content.show(
                new FullScreenFilmView({"model": model}),
                {preventDestroy: (this.content.currentView === this.filmCollectionView)}
            );
        });

        myApp.listenTo(Backbone, 'router:view-list', function() {
            this.content.show(this.filmCollectionView);
        });

        myApp.start();
    });
});