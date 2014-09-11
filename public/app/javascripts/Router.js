var AppRouter = Backbone.Router.extend({
    routes: {
        "films/:filmId":     "viewFilm",
        "": "viewList"
    },

    viewFilm: function(filmId) {
        console.log(filmId);
    },

    viewList: function() {
        console.log('view list');
    },

    navigateToTheList: function() {
        this.navigate('', {trigger: true});
    }
});

var appRouter = new AppRouter();
