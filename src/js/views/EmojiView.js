define(
    [
        'jquery',
        'underscore',
        'backbone',
        'templates',
        'api/analytics'
    ],
    function(jQuery, _, Backbone, templates, Analytics){
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
                Analytics.trackEvent("Emoji clicked: " + this.model.get("name"));
                Backbone.trigger("share:show", this.model);
            }
        });
});
