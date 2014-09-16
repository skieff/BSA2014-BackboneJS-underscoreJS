define(function(require){
    var Backbone = require('./backbone');

    return Backbone.Model.extend({
        defaults:{
            year: 2014,
            name: '',
            id: undefined
        },
        deleteFilm: function() {
            if (this.isNew()) {
                this.collection.remove(this);
            } else {
                this.destroy({
                    success: function(model) {
                        model.collection.remove(model);
                    }
                });
            }
        }
    });
});

