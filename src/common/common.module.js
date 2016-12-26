(function() {
"use strict";

angular.module('common', [])
.constant('ApiPath', 'restaurant-cour-server.herokuapp.com')
.config(config);

config.$inject = ['$httpProvider'];
function config($httpProvider) {
  $httpProvider.interceptors.push('loadingHttpInterceptor');
}

})();
