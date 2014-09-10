var FilmView = Backbone.View.extend({
	className: 'film-container',
	template: _.template($('#film-template').html()),
    editTemplate: _.template($('#film-edit-template').html()),

	initialize: function(){
        this.$el.off('click.film-view').on('click.film-view', '.film-remove', $.proxy(this.onRemoveClick, this));
        this.$el.off('click.film-edit').on('click.film-edit', '.film-edit', $.proxy(this.onEditClick, this));
        this.$el.off('click.film-edit-cancel').on('click.film-edit-cancel', '.film-edit-cancel', $.proxy(this.onEditCancelClick, this));
        this.listenTo(this.model, 'remove', this.onModelRemove);
        this.listenTo(this.model, 'change:editing', this.onEditingChange);
		this.render();
	},

    onRemoveClick: function() {
        this.model.deleteFilm();
    },

    onEditClick: function() {
        this.model.startEditing();
    },

    onEditCancelClick: function() {
        this.model.cancelChanges();
    },

    onModelRemove: function() {
        this.remove();
    },

    onEditingChange: function() {
        this.render();
    },

	render: function(){
        if (this.model.get('editing')) {
            this.$el.html(this.editTemplate(this.model.toJSON()));
        } else {
            this.$el.html(this.template(this.model.toJSON()));
        }
		return this;
	}
});