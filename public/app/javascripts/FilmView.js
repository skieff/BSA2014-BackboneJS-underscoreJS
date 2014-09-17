define(function(require){
    var $ = require('./jquery'),
        Marionette = require('backbone.marionette');

    return Marionette.ItemView.extend({
        editMode: false,

        ui: {
            filmName: '[name="filmName"]',
            filmYear: '[name="filmYear"]'
        },

        events : {
            'click .film-remove' : 'onRemoveClick',
            'click .film-edit' : 'onEditClick',
            'click .film-edit-cancel' : 'onEditCancelClick',
            'click .film-edit-save' : 'onEditSaveClick'
        },

        getTemplate: function() {
            return this.editMode ? '#film-edit-inline-template' : '#film-template';
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
                    name: this.ui.filmName.val(),
                    year: this.ui.filmYear.val()
                },
                {
                    wait:true,
                    success: $.proxy(this.switchToReadOnlyMode, this)
                }
            );
        }
    });
});
