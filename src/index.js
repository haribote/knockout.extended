(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['knockout', 'knockout.mapping'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory(require('knockout'), require('knockout.mapping'));
  } else {
    // Browser globals (root is window)
    root.returnExports = factory(root.ko, root.mapping);
  }
}(this, function (ko, koMapping) {

  ko.mapping = koMapping;

  // Just return a value to define the module export.
  // This example returns an object, but the module
  // can return a function as the exported value.
  return ko;
}));
