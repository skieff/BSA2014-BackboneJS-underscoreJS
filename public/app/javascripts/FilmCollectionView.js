var FilmCollectionView = Backbone.View.extend({
	el: '#films-view',
	initialize: function(){
        console.log(this.collection);

        this.$el.on('click', '.add-film', $.proxy(this.onAddFilmClick, this));
		this.collection.on('add', this.renderNewFilm, this);
        this.listenTo(Backbone, 'showList', this.showList);
        this.listenTo(Backbone, 'addNewFilm', this.onAddFilm);
        this.listenTo(Backbone, 'viewFilmDetails', this.onViewFilmDetails);
	},

    onAddFilmClick: function() {
        appRouter.navigateAddFilm();
    },

    onAddFilm: function() {
        var newFilm = this.collection.add({});

        this.hideList();
        filmView = new FullScreenFilmView({
            model: newFilm
        });
        this.$el.find('#film-details').append(filmView.$el);
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
                model: film
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

