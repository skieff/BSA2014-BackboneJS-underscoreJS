define(function(require){
    var Marionette = require("backbone.marionette"),
        AppRouter = require("Router"),
        Backbone = require("backbone"),
        FilmCollectionView = require("FilmCollectionView"),
        FilmCollection = require("FilmCollection"),
        FullScreenFilmView = require("FullScreenFilmView");

    return Marionette.Application.extend({
        filmCollectionView: null,

        regions: {
            content: "#content"
        },

        events: {
            'start' : 'onStart'
        },

        initialize: function() {
            this.filmCollectionView = new FilmCollectionView({
                collection: new FilmCollection(),
                model: new Backbone.Model()
            });

            this.listenTo(Backbone, 'view:edit-film', this.onViewEditFilm);
            this.listenTo(Backbone, 'router:view-list', this.onRouterViewList);
        },

        onViewEditFilm: function(model) {
            this.content.show(
                new FullScreenFilmView({"model": model}),
                {preventDestroy: (this.content.currentView === this.filmCollectionView)}
            );
        },

        onRouterViewList: function() {
            this.content.show(this.filmCollectionView);
        },

        onStart: function() {
            new AppRouter();
            Backbone.history.start();
        }

    });
});