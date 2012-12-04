/// <reference path="../vendor/jquery.d.ts" />
/// <reference path="../template-dust.d.ts" />

export class ExampleView {

  render(element: HTMLElement) {
    templates.render('example', {name: 'Dust', css: 'less'}, function(error, output) {
      $(element).append(output);
    });

    templates.render('another-example', {name: 'Dust'}, function(error, output) {
      $(element).append(output);
    });
  };
}

