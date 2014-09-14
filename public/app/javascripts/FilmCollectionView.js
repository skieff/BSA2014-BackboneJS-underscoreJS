define(function(require){
    var Backbone = require("./backbone"),
        FilmView = require("./FilmView"),
        FullScreenFilmView = require("./FullScreenFilmView");


    return Backbone.View.extend({
        el: '#films-view',

        events: {
            'click .add-film': 'onAddFilmClick'
        },

        syncPromise: null,

        fullScreenView: null,

        initialize: function(){
            console.log(this);

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

            this.listenTo(this.collection, 'add', this.renderNewFilm);
            this.listenTo(Backbone, 'showList', this.showList);
            this.listenTo(Backbone, 'addNewFilm', this.onAddFilm);
            this.listenTo(Backbone, 'viewFilmDetails', this.onViewFilmDetails);
        },

        onAddFilmClick: function() {
            appRouter.navigateAddFilm();
        },

        onAddFilm: function() {
            this.syncPromise.then($.proxy(this._doAdd, this));
        },

        _doAdd: function() {
            var newFilm = this.collection.add({});

            this.removeFullScreenView();
            this.hideList();
            this.fullScreenView = new FullScreenFilmView({
                model: newFilm
            });
            this.$el.find('#film-details').append(this.fullScreenView.$el);
        },

        showList: function() {
            this.removeFullScreenView();
            this.$el.find('#films-container').show();
            this.$el.find('.add-film').show();
        },

        removeFullScreenView: function() {
            if (this.fullScreenView) {
                this.fullScreenView.close();
                this.fullScreenView = null;
            }
        },

        hideList: function() {
            this.$el.find('#films-container').hide();
            this.$el.find('.add-film').hide();
        },

        onViewFilmDetails: function(filmId) {
            this.syncPromise.then($.proxy(this._doView, this, filmId));
        },

        _doView: function(filmId) {
            var film = this.collection.findWhere({id: filmId});

            this.removeFullScreenView();

            if (film) {
                this.hideList();
                this.fullScreenView = new FullScreenFilmView({
                    model: film
                });
                this.$el.find('#film-details').append(this.fullScreenView.$el);
            } else {
                appRouter.navigateToTheList();
            }
        },

        renderNewFilm: function(model){
            var view = new FilmView({
                model: model
            });
            this.$el.find('#films-container').append(view.$el);
        }
    });
});

