(function () {
    'use strict';

    angular.module('public')
        .controller('UserInfoController', UserInfoController);

    UserInfoController.$inject = ['user', 'MenuService'];
    function UserInfoController(user, MenuService){
        var ctrl = this;

        ctrl.user = user;

        MenuService.getForShortName(user.favdish).then(function(response){
            ctrl.menuItem = response.data;
        })
    }
})();