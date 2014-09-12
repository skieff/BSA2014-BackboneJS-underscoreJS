var FullScreenFilmView = Backbone.View.extend({
    template: _.template($('#film-edit-full-screen-template').html()),

    initialize: function(){
        this.$el.on('click', '.back-to-list', $.proxy(this.onBackToListClick, this));
        this.$el.on('click', '.save-changes', $.proxy(this.onSaveChangesClick, this));
        this.listenTo(Backbone, 'showList', this.onShowList);

        this.render();
    },

    onBackToListClick: function(){
        if (this.model.isNew()) {
            this.model.deleteFilm();
        }
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

    onShowList: function() {
        this.remove();
    },

    render: function() {
        this.$el.html(this.template(this.model.toJSON()));
    }
});