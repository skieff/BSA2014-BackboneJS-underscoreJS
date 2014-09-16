define(function(require){
    var FilmCollection = require("./FilmCollection"),
        FilmCollectionView = require("./FilmCollectionView"),
        AppRouter = require("./Router"),
        Backbone = require("./backbone"),
        domReady = require("./domReady");

    domReady(function(){
        new FilmCollectionView({
            collection: new FilmCollection()
        });

        new AppRouter();
        Backbone.history.start();
    });
});