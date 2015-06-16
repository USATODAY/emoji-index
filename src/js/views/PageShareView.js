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
            template: templates["PageShare.html"],
            render: function() {
                this.$el.html(this.template(this.model.toJSON()));
            },
            events: {
                "click .iapp-share-close": "closeView",
                'click .iapp-share-popup': 'onShareButtonClick',
                'click .iapp-download': 'onDownloadClick'
            },
            closeView: function() {
                this.remove();
            },
            onDownloadClick: function() {
                Analytics.trackEvent("Whole emoji set downloaded");
            },
            onShareButtonClick: function(e) {
                Analytics.trackEvent('Page social share button clicked');
                e.preventDefault();
                

              this.windowPopup(e.currentTarget.href, 500, 300);
            },
            windowPopup: function(url, width, height) {
                // Calculate the position of the popup so
                // it’s centered on the screen.
                var left = (screen.width / 2) - (width / 2),
                top = (screen.height / 2) - (height / 2);

                window.open(
                    url,
                    "",
                    "menubar=no,toolbar=no,resizable=yes,scrollbars=yes,width=" + width + ",height=" + height + ",top=" + top + ",left=" + left
                );
            }
        });
});
