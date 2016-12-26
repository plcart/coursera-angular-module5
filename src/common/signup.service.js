(function () {
    'use strict';

    angular.module('common')
        .service('SignupService', SignupService);

    SignupService.$inject = [];
    function SignupService (){
        var service = this;

        var user = {};

        service.register = function (_user) {
            user = _user;
        }

        service.getUserInfo = function (){
            return user;
        }
    }
})();