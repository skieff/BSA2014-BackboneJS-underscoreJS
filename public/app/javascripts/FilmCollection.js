define(function(require){
    var Backbone = require("./backbone"),
        Film = require("./Film");

    return Backbone.Collection.extend({
        url: '/api/films',
        model: Film,
        initialize: function(){
            this.fetch();
        }
    });
});

