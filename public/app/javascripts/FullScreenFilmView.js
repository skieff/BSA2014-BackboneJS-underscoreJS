define(function(require){
    var Backbone = require("./backbone"),
        $ = require('./jquery');

    return Backbone.View.extend({
        template: _.template($('#film-edit-full-screen-template').html()),

        events: {
            'click .back-to-list': 'onBackToListClick',
            'click .save-changes': 'onSaveChangesClick'
        },

        initialize: function(){
            this.render();
        },

        onBackToListClick: function(){
            Backbone.trigger('navigate-to-the-list');
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
                        Backbone.trigger('navigate-to-the-list');
                    }
                }
            );
        },

        close: function() {
            if (this.model.isNew()) {
                this.model.deleteFilm();
            }
            this.remove();
        },

        render: function() {
            this.$el.html(this.template(this.model.toJSON()));
        }
    });
});

