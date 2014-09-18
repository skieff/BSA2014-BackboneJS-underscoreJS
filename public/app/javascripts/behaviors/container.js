define(function(require){
    var Marionette = require('backbone.marionette'),
        BehaviorsContainer = {};

    Marionette.Behaviors.behaviorsLookup = function() {
        return BehaviorsContainer;
    };

    return BehaviorsContainer;

});