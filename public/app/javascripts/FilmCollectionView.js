define(function(require){
    var Backbone = require("backbone"),
        FilmView = require("FilmView"),
        Marionette = require("backbone.marionette"),
        $ = require('jquery');

    return Marionette.CompositeView.extend({
        template: '#films-view-template',
        childViewContainer: "#films-container",
        childView: FilmView,
        syncPromise: null,

        events: {
            'click .add-film': 'onAddFilmClick'
        },

        initialize: function() {
            /**
             * when view is initialized collection is not populated with models yet
             * so we have to use Deferred to suspend routing event listeners which
             * depends on collection state until collection sync event
             *
             * other solution is to populate collection alongside with page loading
             */
            var syncDeferred = $.Deferred();

            this.syncPromise = syncDeferred.promise();

            this.listenToOnce(this.collection, 'sync', function(){
                syncDeferred.resolve();
            });

            this.listenTo(Backbone, 'router:new-film', this.onRouterNewFilm);
            this.listenTo(Backbone, 'router:film-details', this.onRouterFilmView);
        },

        onAddFilmClick: function() {
            Backbone.trigger('view:navigate-add-film');
        },

        onRouterNewFilm: function() {
            this.syncPromise.then($.proxy(this._doAdd, this));
        },

        _doAdd: function() {
            Backbone.trigger('view:edit-film', this.collection.add({}));
        },

        onRouterFilmView : function(filmId) {
            this.syncPromise.then($.proxy(this._doView, this, filmId));
        },

        _doView: function(filmId) {
            var film = this.collection.findWhere({id: filmId});

            if (film) {
                Backbone.trigger('view:edit-film', film);
            } else {
                Backbone.trigger('view:navigate-view-list');
            }
        }

    });
});

