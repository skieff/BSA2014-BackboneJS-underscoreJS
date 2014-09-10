var Film = Backbone.Model.extend({
	defaults:{
		year: 2014,
		name: '',
		id: undefined,
        editing: false
	},
    deleteFilm: function() {
        if (this.isNew()) {
            this.collection.remove(this.model);
        } else {
            this.destroy({
                success: function(model) {
                    model.collection.remove(model);
                }
            });
        }
    },

    startEditing: function() {
        this.set('editing', true);
    },

    cancelChanges: function() {
        this.set('editing', false);

        if (this.isNew()) {
            this.collection.remove(this.model);
        }
    },

    saveChanges: function(data) {
        this.save(
            data,
            {
                wait:true,
                success: function(model) {
                    console.log(model);
                    model.set('editing', false);
                }
            }
        );
    }
});