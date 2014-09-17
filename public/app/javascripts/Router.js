define(function(require){
    var Marionette = require('backbone.marionette'),
        Backbone = require('backbone');

    return Marionette.AppRouter.extend({

        channel: null,

        routes: {
            "films/new":     "newFilm",
            "films/:filmId":     "viewFilm",
            "": "viewList"
        },

        newFilm: function() {
            //Marionette.trigger('addNewFilm');
        },

        viewFilm: function(filmId) {
            //Marionette.trigger('viewFilmDetails', parseInt(filmId));
        },

        viewList: function() {
            this.channel.commands.execute('view-list');
        },

        navigateAddFilm: function() {
            this.navigate('films/new', {trigger: true});
        },

        navigateToTheList: function() {
            this.navigate('', {trigger: true});
        },

        initialize: function() {
            this.channel = Backbone.Wreqr.radio.channel('global');
        }
    });

});

