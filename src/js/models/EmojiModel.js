define([
    'jquery',
    'underscore',
    'backbone',
    'config'
], function(jQuery, _, Backbone, config) {
    return Backbone.Model.extend({
        initialize: function() {
            var baseURL = window.location.origin + window.location.pathname;
            this.set({
                'baseURL': baseURL,
                'fbShare': this.createFbShareURL(baseURL),
                'twitterShare': this.createTwitterShareURL(baseURL),
                'twitterShareImage': this.createTwitterShareURL(" " + this.get('pageImgur')),
                'share_language': this.get('name'),
                'encodedShare': encodeURIComponent(this.get('name')),
                'fb_id': config.fb_app_id,
                'email_link': this.createEmailLink(baseURL),
                'fb_redirect': 'http://' + window.location.hostname + '/pages/interactives/fb-share/',
            }); 
        },
        createFbShareURL: function(url) {   
            url = url.replace('#', '%23');
            return encodeURI(url); 
        },
        createTwitterShareURL: function(url) {
            return encodeURIComponent(url); 
        },
        createEmailLink: function(url) {
            return "mailto:?body=" + encodeURIComponent(this.get('sharelanguage')) +  "%0d%0d" + this.createTwitterShareURL(url) + "&subject=";
        },
        updateLanguage: function(newShareStr) {
            this.set({
                'sharelanguage': newShareStr,
                'encodedShare': encodeURIComponent(newShareStr)
            });
        }
    });
});
