define(
    [
        'jquery',
        'underscore',
        'backbone',
        'templates',
    ],
    function(jQuery, _, Backbone, templates){
        return Backbone.View.extend({
            initialize: function() {
                this.render();
            },
            template: templates["ShareView.html"],
            className: "iapp-share-wrap",
            render: function() {
                this.$el.html(this.template(this.model.toJSON()));
            },
            events: {
                "click .iapp-share-close": "closeView"
            },
            closeView: function() {
                this.remove();
            }
        });
});
