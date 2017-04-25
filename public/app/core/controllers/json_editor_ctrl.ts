///<reference path="../../headers/common.d.ts" />
///<reference path="../../headers/monaco.d.ts" />

import angular from 'angular';
import coreModule from '../core_module';

import loader from 'monaco-editor/loader';

loader.RequireFunc.config({
  baseUrl: 'public',
  paths: { 'vs': 'vendor/npm/monaco-editor/dev/vs' }
});

loader.RequireFunc(['vs/editor/editor.main'], monaco => {
  console.log(monaco);
});

export class JsonEditorCtrl {

  /** @ngInject */
  constructor($scope) {
    $scope.json = angular.toJson($scope.object, true);
    $scope.canUpdate = $scope.updateHandler !== void 0 && $scope.contextSrv.isEditor;

    $scope.update = function () {
      var newObject = angular.fromJson($scope.json);
      $scope.updateHandler(newObject, $scope.object);
    };

  }

}

coreModule.controller('JsonEditorCtrl', JsonEditorCtrl);
