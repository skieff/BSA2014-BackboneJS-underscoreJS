var FilmView = Backbone.View.extend({
	className: 'film-container',
	template: _.template($('#film-template').html()),

	initialize: function(){
        this.$el.off('click.film-view').on('click.film-view', '.film-remove', $.proxy(this.onRemoveClick, this));
        this.listenTo(this.model, 'remove', this.onModelRemove);
		this.render();
	},

    onRemoveClick: function() {
        if (this.model.isNew()) {
            this.model.collection.remove(this.model);
        } else {
            this.model.destroy({
                success: function(model) {
                    model.collection.remove(model);
                }
            });
        }

    },

    onModelRemove: function() {
        this.remove();
    },

	render: function(){
		this.$el.html(this.template(this.model.toJSON()));
		return this;
	}
});