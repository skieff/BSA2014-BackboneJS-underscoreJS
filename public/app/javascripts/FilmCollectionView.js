var FilmCollectionView = Backbone.View.extend({
	el: '#films-view',
	initialize: function(){
		this.collection.on('add', this.renderNewFilm, this);
        this.listenTo(Backbone, 'showList', this.showList);
        this.listenTo(Backbone, 'viewFilmDetails', this.onViewFilmDetails);
	},

    showList: function() {
        this.$el.find('#films-container').show();
        this.$el.find('.add-film').show();
    },

    hideList: function() {
        this.$el.find('#films-container').hide();
        this.$el.find('.add-film').hide();
    },

    onViewFilmDetails: function(filmId) {
        var film = this.collection.findWhere({id: filmId}),
            filmView;

        if (film) {
            this.hideList();
            filmView = new FullScreenFilmView({
                model: this.collection.findWhere({id: filmId})
            });
            this.$el.find('#film-details').append(filmView.$el);
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

var filmsView = new FilmCollectionView({
	collection: films
});

