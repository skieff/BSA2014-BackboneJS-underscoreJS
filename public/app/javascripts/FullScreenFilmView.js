define(function(require){
    var Backbone = require("./backbone");

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
            appRouter.navigateToTheList();
        },

        onSaveChangesClick: function() {
            this.model.save(
                {
                    name: this.$el.find('[name="filmName"]').val(),
                    year: this.$el.find('[name="filmYear"]').val()
                },
                {
                    wait:true,
                    success: $.proxy(appRouter.navigateToTheList, appRouter)
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

