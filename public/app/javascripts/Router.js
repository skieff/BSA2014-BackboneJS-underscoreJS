var AppRouter = Backbone.Router.extend({
    routes: {
        "films/:filmId":     "viewFilm",
        "": "viewList"
    },

    viewFilm: function(filmId) {
        Backbone.trigger('viewFilmDetails', parseInt(filmId));
    },

    viewList: function() {
        Backbone.trigger('showList');
    },

    navigateToTheList: function() {
        this.navigate('', {trigger: true});
    }
});

var appRouter = new AppRouter();
