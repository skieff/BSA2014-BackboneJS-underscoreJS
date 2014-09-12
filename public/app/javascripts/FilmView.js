var FilmView = Backbone.View.extend({
	className: 'film-container',
	template: _.template($('#film-template').html()),
    editTemplate: _.template($('#film-edit-inline-template').html()),
    editMode: false,

    events : {
        'click .film-remove' : 'onRemoveClick',
        'click .film-edit' : 'onEditClick',
        'click .film-edit-cancel' : 'onEditCancelClick',
        'click .film-edit-save' : 'onEditSaveClick'
    },

	initialize: function(){
        this.listenTo(this.model, 'remove', this.onModelRemove);
        this.listenTo(this.model, 'change', this.render);
		this.render();
	},

    switchToEditMode: function() {
        this.editMode = true;
        this.render();
    },

    switchToReadOnlyMode: function() {
        this.editMode = false;
        this.render();
    },

    onRemoveClick: function() {
        this.model.deleteFilm();
    },

    onEditClick: function() {
        this.switchToEditMode();
    },

    onEditCancelClick: function() {
        this.switchToReadOnlyMode();
    },

    onEditSaveClick: function() {
        this.model.save(
            {
                name: this.$el.find('[name="filmName"]').val(),
                year: this.$el.find('[name="filmYear"]').val()
            },
            {
                wait:true,
                success: $.proxy(this.switchToReadOnlyMode, this)
            }
        );
    },

    onModelRemove: function() {
        this.remove();
    },

	render: function(){
        if (this.editMode) {
            this.$el.html(this.editTemplate(this.model.toJSON()));
        } else {
            this.$el.html(this.template(this.model.toJSON()));
        }
		return this;
	}
});