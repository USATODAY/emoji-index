define(function(){

this["templates"] = this["templates"] || {};

this["templates"]["AppView.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="iapp-page-info-wrap">\n    <h2 class="iapp-page-header">' +
((__t = ( head )) == null ? '' : __t) +
'</h2>\n    <p class="iapp-page-chatter">' +
((__t = ( chatter )) == null ? '' : __t) +
'</p>\n    <div class="iapp-page-share-wrap"></div>\n</div>\n<div class="iapp-emoji-container"></div>\n';

}
return __p
};

this["templates"]["EmojiView.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="iapp-emoji-image-wrap">\n    <img src="' +
((__t = ( image_url )) == null ? '' : __t) +
'" alt="' +
((__t = ( name )) == null ? '' : __t) +
'">\n</div>\n<h2 class="iapp-emoji-name">' +
((__t = ( name )) == null ? '' : __t) +
'</h2>\n';

}
return __p
};

this["templates"]["PageShare.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="iapp-share-buttons">\n    <a href="https://twitter.com/intent/tweet?url=' +
((__t = (twitterShare)) == null ? '' : __t) +
'&text=' +
((__t = (encodedShare)) == null ? '' : __t) +
'" class="iapp-share-button iapp-share-twitter iapp-share-popup" target="_blank"><img src="http://www.gannett-cdn.com/experiments/usatoday/2015/06/emoji-index/img/twitter.svg" alt="Twitter share"></a>\n    <a href="https://www.facebook.com/dialog/feed?display=popup&app_id=' +
((__t = (fb_id)) == null ? '' : __t) +
'&link=' +
((__t = (fbShare)) == null ? '' : __t) +
'&picture=' +
((__t = (shareImage)) == null ? '' : __t) +
'&name=&description=' +
((__t = (encodedShare)) == null ? '' : __t) +
'&redirect_uri=' +
((__t = (fb_redirect)) == null ? '' : __t) +
'" class="iapp-share-button iapp-share-facebook iapp-share-popup" target="_blank"><img src="http://www.gannett-cdn.com/experiments/usatoday/2015/06/emoji-index/img/fb.svg" alt="Facebook share"></a>\n</div>\n';

}
return __p
};

this["templates"]["ShareView.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="iapp-emoji-image-wrap">\n    <div class="iapp-share-close iapp-clickable"><img src="http://www.gannett-cdn.com/experiments/usatoday/2015/06/emoji-index/img/close-icon.svg" alt="close"></div>\n    \n    <img src="' +
((__t = ( image_url )) == null ? '' : __t) +
'" alt="' +
((__t = ( name )) == null ? '' : __t) +
'">\n</div>\n\n<div class="iapp-share-buttons">\n    <a href="https://twitter.com/intent/tweet?url=' +
((__t = (twitterShare)) == null ? '' : __t) +
'&text=' +
((__t = (encodedShare)) == null ? '' : __t) +
'' +
((__t = ( twitterShareImage )) == null ? '' : __t) +
'" class="iapp-share-button iapp-share-twitter iapp-share-popup" target="_blank"><img src="http://www.gannett-cdn.com/experiments/usatoday/2015/06/emoji-index/img/twitter.svg" alt="Twitter share"></a>\n    <a href="https://www.facebook.com/dialog/feed?display=popup&app_id=' +
((__t = (fb_id)) == null ? '' : __t) +
'&link=' +
((__t = (fbShare)) == null ? '' : __t) +
'&picture=' +
((__t = (directImgur)) == null ? '' : __t) +
'&name=&description=' +
((__t = (encodedShare)) == null ? '' : __t) +
'&redirect_uri=' +
((__t = (fb_redirect)) == null ? '' : __t) +
'" class="iapp-share-button iapp-share-facebook iapp-share-popup" target="_blank"><img src="http://www.gannett-cdn.com/experiments/usatoday/2015/06/emoji-index/img/fb.svg" alt="Facebook share"></a>\n    <a href="' +
((__t = ( image_url )) == null ? '' : __t) +
'" download="' +
((__t = ( image_url )) == null ? '' : __t) +
'" class="iapp-share-button iapp-download"><img src="http://www.gannett-cdn.com/experiments/usatoday/2015/06/emoji-index/img/download-icon.svg" alt="Email share"></a>\n</div>\n';

}
return __p
};

this["templates"]["template.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<h3>' +
((__t = (test)) == null ? '' : __t) +
'</h3>\n';

}
return __p
};

  return this["templates"];

});