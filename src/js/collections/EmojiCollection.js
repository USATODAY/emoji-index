define([
    'jquery',
    'underscore',
    'backbone',
    'models/EmojiModel'
], function(jQuery, _, Backbone, EmojiModel) {
    return Backbone.Collection.extend({
        model: EmojiModel
    });
});
