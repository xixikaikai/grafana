(function() {
  "use strict";

  // Tun on full stack traces in errors to help debugging
  Error.stackTraceLimit=Infinity;

  window.__karma__.loaded = function() {};

  function file2moduleName(filePath) {
    return filePath.replace(/\\/g, '/')
      .replace(/^\/base\//, '')
      .replace(/\.\w*$/, '');
  }

  function onlySpecFiles(path) {
    return /specs.*/.test(path);
  }

  window.grafanaBootData = {settings: {}};

  var modules = ['angular', 'angular-mocks', 'app/app'];
  var promises = modules.map(function(name) {
    return System.import(name);
  });

  Promise.all(promises).then(function(deps) {
    var angular = deps[0];

    angular.module('grafana', ['ngRoute']);
    angular.module('grafana.services', ['ngRoute', '$strap.directives']);
    angular.module('grafana.panels', []);
    angular.module('grafana.controllers', []);
    angular.module('grafana.directives', []);
    angular.module('grafana.filters', []);
    angular.module('grafana.routes', ['ngRoute']);

    // load specs
    return Promise.all(
      Object.keys(window.__karma__.files) // All files served by Karma.
        .filter(onlySpecFiles)
        .map(file2moduleName)
        .map(function(path) {
          // console.log(path);
          return System.import(path);
        }));
  }).then(function()  {
    window.__karma__.start();
  }, function(error) {
    window.__karma__.error(error.stack || error);
  }).catch(function(error) {
    window.__karma__.error(error.stack || error);
  });

})();
