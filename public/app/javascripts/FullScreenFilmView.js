define(function(require){
    var Backbone = require("./backbone"),
        Marionette = require("backbone.marionette");

    return Marionette.ItemView.extend({
        template: '#film-edit-full-screen-template',

        events: {
            'click .back-to-list': 'onBackToListClick',
            'click .save-changes': 'onSaveChangesClick'
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
                    name: this.$el.find('[name="filmName"]').val(),
                    year: this.$el.find('[name="filmYear"]').val()
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

