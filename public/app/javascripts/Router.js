var AppRouter = Backbone.Router.extend({
    routes: {
        "films/new":     "newFilm",
        "films/:filmId":     "viewFilm",
        "": "viewList"
    },

    newFilm: function() {
        Backbone.trigger('addNewFilm');
    },

    viewFilm: function(filmId) {
        Backbone.trigger('viewFilmDetails', parseInt(filmId));
    },

    viewList: function() {
        Backbone.trigger('showList');
    },

    navigateAddFilm: function() {
        this.navigate('films/new', {trigger: true});
    },

    navigateToTheList: function() {
        this.navigate('', {trigger: true});
    }
});

var appRouter = new AppRouter();
