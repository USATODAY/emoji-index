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
            template: templates["EmojiView.html"],
            className: "iapp-emoji-wrap",
            render: function() {
                this.$el.html(this.template(this.model.toJSON()));
            },
            events: {
                "click": "showShare"
            },
            showShare: function() {
                Backbone.trigger("share:show", this.model);
            }
        });
});
