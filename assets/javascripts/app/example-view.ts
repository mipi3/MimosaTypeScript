/// <reference path="../vendor/require.d.ts" />

define(['jquery', 'templates'], function($, templates) {
  var ExampleView = (function() {

    function ExampleView() {}

    ExampleView.prototype.render = function(element) {
      $(element).append(templates.example({name: 'Handlebars',css: 'stylus'}));
      $(element).append(templates['another-example']({name: 'Handlebars'}));
    };

    return ExampleView;

  })();
  return ExampleView;
});
