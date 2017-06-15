(function(){
  'use strict';

  angular.module('public')
  .controller('MyInfoController', MyInfoController);

  MyInfoController.$inject = ['MenuService', 'ApiPath'];
  function MyInfoController(MenuService, ApiPath){
    var $ctrl = this;
    $ctrl.basePath = ApiPath;

    $ctrl.userInfo = MenuService.getUserInfo();
    if($ctrl.userInfo != undefined) {
      $ctrl.show = true;
    }
    else {
      $ctrl.show = false;
    }
    console.log("$ctrl.userInfo", $ctrl.userInfo);
  };
})();
