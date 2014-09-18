define(function(require){
    var Backbone = require("./backbone"),
        Marionette = require("backbone.marionette"),
        Wrap = require('behaviors/wrap');

    return Marionette.ItemView.extend({
        template: '#film-edit-full-screen-template',

        ui: {
            filmName: '[name="filmName"]',
            filmYear: '[name="filmYear"]'
        },

        events: {
            'click .back-to-list': 'onBackToListClick',
            'click .save-changes': 'onSaveChangesClick'
        },

        behaviors: {
            Wrap: {}
        },

        initialize: function(){
            this.render();
        },

        onBackToListClick: function(){
            Backbone.trigger('view:navigate-view-list');
        },

        onSaveChangesClick: function() {
            this.model.save(
                {
                    name: this.ui.filmName.val(),
                    year: this.ui.filmYear.val()
                },
                {
                    wait:true,
                    success: function(){
                        Backbone.trigger('view:navigate-view-list');
                    }
                }
            );
        },

        onDestroy: function() {
            if (this.model.isNew()) {
                this.model.deleteFilm();
            }
        }
    });
});

