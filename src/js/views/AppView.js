define(
    [
        'jquery',
        'underscore',
        'backbone',
        'imagesloaded',
        'templates',
        'collections/EmojiCollection',
        'views/EmojiView',
        'views/ShareView',
        'views/PageShareView',
        'models/ShareModel',
        'config'
    ],
    function(jQuery, _, Backbone, imagesLoaded, templates, EmojiCollection, EmojiView, ShareView, PageShareView, ShareModel, config){
        return Backbone.View.extend({
            initialize: function() {
                this.listenTo(Backbone, "data:ready", this.render);
                this.listenTo(Backbone, "share:show", this.showShare);
            },
            template: templates["AppView.html"],
            render: function(data) {
                this.$el.append(this.template({head: data.head, chatter: data.chatter}));
                var isDesktop = !config.isMobile && !config.isTable;
                var shareModel = new ShareModel({share_language: data.share_language, shareImage: config.shareImage, isDesktop: isDesktop, zipDownload: config.zipDownload});

                var shareView = new PageShareView({model: shareModel, el: '.iapp-page-share-wrap'});
                console.log(shareView);
                this.addSubViews(data);
            },
            addSubViews: function(data) {
                var _this = this;
                var emojiCollection = new EmojiCollection(data.emojis);
                console.log(emojiCollection);
                this.subViews = [];
                emojiCollection.each(function(emojiModel) {
                    var emojiView = new EmojiView({model: emojiModel});
                    _this.subViews.push(emojiView);
                    _this.$('.iapp-emoji-container').append(emojiView.el);
                                    
                });
                this.$('.iapp-emoji-container').masonry({
                    itemSelector: '.iapp-emoji-wrap'
                });

                this.$('.iapp-emoji-container').imagesLoaded(function() {
                    _this.$('.iapp-emoji-container').masonry('layout');
                });

            },
            showShare: function(emojiModel) {
                var shareView = new ShareView({model: emojiModel});
                this.$el.append(shareView.el);
            }
        });
});
