"use strict";

describe('alt.menu-lateral', function() {
  var _scope, _element, _compile;

  beforeEach(module('alt.menu-lateral'));

  beforeEach(inject(function($injector) {
    _scope = $injector.get('$rootScope').$new();
    _compile = $injector.get('$compile');

    var _html = '<div alt-menu-lateral-handler id-menu="#abcdef"></div>\
                 <div id="abcdef"></div>';

    _element = angular.element(_html);

  }));

  describe('criação', function() {
    it('deve ter a diretiva criada corretamente', function() {
      _compile(_element)(_scope);
      _scope.$digest();

      expect(_element).toBeDefined();
    });

    it('deve esconder o menu ao iniciar a diretiva', function() {
      spyOn($.fn, 'css').and.callThrough();

      _compile(_element)(_scope);
      _scope.$digest();

      expect(_element.css).toHaveBeenCalledWith({'margin-left': '-999px'});
    });
  })

  describe('click', function() {
    it('deve chamar o primeiro click para mostrar o menu', function() {
      spyOn($.fn, 'css').and.returnValue('-999px');

      _compile(_element)(_scope);
      _scope.$digest();

      expect(_element.css.calls.argsFor(0)).toEqual([{'margin-left': '-999px'}]);

      _element.click();

      expect(_element.css.calls.argsFor(1)).toEqual(['margin-left']);
      expect(_element.css.calls.argsFor(2)).toEqual([{'margin-left': '0px'}]);
    })

    it('deve chamar o primeiro click para mostrar o menu e o próximo para esconder', function() {
      spyOn($.fn, 'css').and.callThrough();

      _compile(_element)(_scope);
      _scope.$digest();

      expect(_element.css.calls.argsFor(0)).toEqual([{'margin-left': '-999px'}]);

      _element.click();

      expect(_element.css.calls.argsFor(1)).toEqual(['margin-left']);
      //expect(_element.css.calls.argsFor(2)).toEqual([{'margin-left': '0px'}]);

      _element.click();

      expect(_element.css.calls.argsFor(3)).toEqual(['margin-left']);
      expect(_element.css.calls.argsFor(4)).toEqual([{'margin-left': '-999px'}]);

      _element.click();

      expect(_element.css.calls.argsFor(5)).toEqual(['margin-left']);
      //expect(_element.css.calls.argsFor(6)).toEqual([{'margin-left': '0px'}]);
    })
  });
});
