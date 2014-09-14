define(function(require){
    var FilmCollection = require("./FilmCollection"),
        FilmCollectionView = require("./FilmCollectionView"),
        AppRouter = require("./Router"),
        Backbone = require("./backbone");

    var filmsView = new FilmCollectionView({
        collection: new FilmCollection(),
        appRouter: new AppRouter()
    });

    Backbone.History.start();
});