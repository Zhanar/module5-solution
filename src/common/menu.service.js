(function () {
"use strict";

angular.module('common')
.service('MenuService', MenuService);


MenuService.$inject = ['$http', 'ApiPath'];
function MenuService($http, ApiPath) {
  var service = this;
  var userInformation;

  service.getCategories = function () {
    return $http.get(ApiPath + '/categories.json').then(function (response) {
      return response.data;
    });
  };

  service.getMenuItems = function (category) {
    var config = {};
    if (category) {
      config.params = {'category': category};
    }

    return $http.get(ApiPath + '/menu_items.json', config).then(function (response) {
      return response.data;
    });
  };

  service.getItem = function(shortName){
    return $http.get(ApiPath + '/menu_items/' + shortName + '.json').then(function(response){
      return response.data;
    });
  };

  service.saveUserInfo = function(userInfo){
    userInformation = userInfo;
  };

  service.getUserInfo = function() {
    return userInformation;
  };
}
})();
