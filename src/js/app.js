define(
  [
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'dataManager',
    'views/AppView',
    'masonry'
  ],
  function(jQuery, _, Backbone, templates, dataManager, AppView, Masonry){
    var app = app || {};
    
    app.init = function() {
        //require jquery-bridget for puluginizing Isotope
        require( [ 'jquery-bridget/jquery.bridget' ],
            function() {
            // make Masonry a jQuery plugin
            jQuery.bridget( 'masonry', Masonry );
            var appView = new AppView({el: '.iapp-page-wrap'});
            dataManager.getData('data.json', function(data) {
                Backbone.trigger("data:ready", data);
            });
        });
    };

    return app;

});
