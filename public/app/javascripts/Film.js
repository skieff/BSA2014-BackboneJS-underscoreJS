define(function(require){
    var Backbone = require('./backbone');

    return Backbone.Model.extend({
        defaults:{
            year: 2014,
            name: '',
            id: undefined
        },
        deleteFilm: function() {
            this.destroy({
                sync: true
            });
        }
    });
});

