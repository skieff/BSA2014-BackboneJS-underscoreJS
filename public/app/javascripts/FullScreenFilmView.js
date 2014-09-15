define(function(require){
    var Backbone = require("./backbone");

    return Backbone.View.extend({
        template: _.template($('#film-edit-full-screen-template').html()),

        events: {
            'click .back-to-list': 'onBackToListClick',
            'click .save-changes': 'onSaveChangesClick'
        },

        appRouter: null,

        initialize: function(data){
            this.appRouter = data.appRouter;
            this.render();
        },

        onBackToListClick: function(){
            this.appRouter.navigateToTheList();
        },

        onSaveChangesClick: function() {
            this.model.save(
                {
                    name: this.$el.find('[name="filmName"]').val(),
                    year: this.$el.find('[name="filmYear"]').val()
                },
                {
                    wait:true,
                    success: $.proxy(this.appRouter.navigateToTheList, this.appRouter)
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

