define(function(require){
    var Marionette = require('backbone.marionette'),
        BehaviorsContainer = require('behaviors/container');

    BehaviorsContainer.Wrap = Marionette.Behavior.extend({
        events: {
            'mousemove': 'onMouseMove',
            'mouseout': 'onMouseOut'
        },

        onMouseMove: function() {
            this.$el.css('border', '1px solid');
            return false;
        },

        onMouseOut: function() {
            this.$el.css('border', 'none');
        }
    });

    return BehaviorsContainer.Wrap;
});