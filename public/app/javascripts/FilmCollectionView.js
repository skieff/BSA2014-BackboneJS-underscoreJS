var FilmCollectionView = Backbone.View.extend({
	el: '#films-container',
	initialize: function(){
		this.collection.on('add', this.renderNewFilm, this);

        $('.back-to-list').on('click', function(){
            appRouter.navigateToTheList();
        });
	},

	renderNewFilm: function(model){
		var view = new FilmView({
			model: model
		});
		this.$el.append(view.$el);
	}
});

var filmsView = new FilmCollectionView({
	collection: films
});

