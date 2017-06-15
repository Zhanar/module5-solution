(function () {
  'use strict';

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['MenuService'];
function SignUpController(MenuService) {
  var $ctrl = this;

  $ctrl.getItem = function(){

    $ctrl.item = "";
    var shortName = $ctrl.user.menunumber;

    var promise = MenuService.getItem(shortName);

    promise.then(function (data) {
      if(data != undefined) {
        $ctrl.item = data.name + " (" + data.description + "). ";
        $ctrl.user.menuname = data.name;
        $ctrl.user.menudescription = data.description;
        MenuService.saveUserInfo($ctrl.user);
      }
    })
    .catch(function (error) {
      console.log(error);
      $ctrl.item = "No such menu number exists.";
    });
  };

  $ctrl.submit = function () {

    $ctrl.message = "Your information has been saved.";
    $ctrl.completed = true;
  };
}

})();
