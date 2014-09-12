var FilmCollectionView = Backbone.View.extend({
	el: '#films-view',
	initialize: function(){
		this.collection.on('add', this.renderNewFilm, this);
        this.listenTo(Backbone, 'showList', this.showList, this);
        this.listenTo(Backbone, 'viewFilmDetails', this.hideList, this);

        //$('.back-to-list').on('click', function(){
        //    appRouter.navigateToTheList();
        //});
	},

    showList: function() {
        this.$el.show();
    },

    hideList: function() {
        this.$el.hide();
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

