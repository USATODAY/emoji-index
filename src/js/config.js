define([
    'jquery'
], function(jQuery) {
    var isMobile, fb_app_id;
    var isTablet = false;

    var staticInfo = JSON.parse(jQuery(".staticinfo").html());

    if (staticInfo.platform == "desktop") {
        isMobile = false;
    } else {
        isMobile = true;
    }

    if (isMobile === false) {
        if (Modernizr.touch) {
            isTablet = true;
        }
    }

    fb_app_id = staticInfo.facebook.app_id;

    return {
        'image_path': 'http://www.gannett-cdn.com/experiments/usatoday/2015/06/emoji-index/img/custom/100/',
        shareImage: 'http://www.gannett-cdn.com/experiments/usatoday/2015/06/emoji-index/img/fb-post.jpg',
        zipDownload: 'http://www.gannett-cdn.com/experiments/usatoday/2015/06/emoji-index/img/USATODAY_POLITICAL_EMOJI.zip',
        staticInfo: staticInfo,
        fb_app_id: fb_app_id
    };
});
