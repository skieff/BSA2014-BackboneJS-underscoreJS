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
            Backbone.trigger('router:new-film');
        },

        viewFilm: function(filmId) {
            Backbone.trigger('router:film-details', parseInt(filmId));
        },

        viewList: function() {
            Backbone.trigger('router:view-list');
        },

        navigateAddFilm: function() {
            this.navigate('films/new', {trigger: true});
        },

        navigateToTheList: function() {
            this.navigate('', {trigger: true});
        },

        initialize: function() {
            this.listenTo(Backbone, 'view:navigate-add-film', this.navigateAddFilm);
            this.listenTo(Backbone, 'view:navigate-view-list', this.navigateToTheList);
        }
    });

});

