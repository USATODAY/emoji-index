define([
    'jquery',
    'underscore',
    'config'
    ],
    function(jQuery, _, config) {
        return {
            getDataURL: function(filename) {
                var dataURL;
                var hostname = window.location.hostname;
                if ((hostname == "localhost" || hostname == "10.0.2.2")) {
                    dataURL = 'data/' + filename;
                } else {
                    dataURL = "http://" + hostname + "/services/webproxy/?url=http://www.gannett-cdn.com/experiments/usatoday/2015/05/emoji-index/data/" + filename;
                }
                return dataURL;
            },
            getData: function(filename, callback) {
                var _this = this;
                var dataURL = this.getDataURL(filename);
                jQuery.getJSON(dataURL, function(data) {
                    var parsedData = _this.parseData(data[0]);
                    callback(parsedData);
                });
            },
            parseData: function(data) {
                var _this = this;
                var parsedData = _.extend({}, data);
                _.each(parsedData.emojis, function(item) {
                    item.image_url = config.image_path + item.image_name;
                    var emojiImgurInfo = _this.getImgurLinks(item);
                    _.extend(item, emojiImgurInfo);
                });
                return parsedData;
            },
            getImgurLinks: function(emojiObj) {
                var directImgur = "http://i.imgur.com/" + emojiObj.imgur_id + ".png";
                var pageImgur = "http://imgur.com/" + emojiObj.imgur_id;
                return {
                    directImgur: directImgur,
                    pageImgur: pageImgur
                };
            }
        };
});
