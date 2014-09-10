var FilmView = Backbone.View.extend({
	className: 'film-container',
	template: _.template($('#film-template').html()),
    editTemplate: _.template($('#film-edit-template').html()),

	initialize: function(){
        this.$el.on('click.film-view', '.film-remove', $.proxy(this.onRemoveClick, this));
        this.$el.on('click.film-view', '.film-edit', $.proxy(this.onEditClick, this));
        this.$el.on('click.film-view', '.film-edit-cancel', $.proxy(this.onEditCancelClick, this));
        this.$el.on('click.film-view', '.film-edit-save', $.proxy(this.onEditSaveClick, this));

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

    onEditSaveClick: function() {
        this.model.saveChanges({
            name: this.$el.find('[name="filmName"]').val(),
            year: this.$el.find('[name="filmYear"]').val()
        });
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