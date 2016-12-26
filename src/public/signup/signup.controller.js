(function () {
    'use strict';

    angular.module('public')
        .controller('SignupController', SignupController);

    SignupController.$inject = ['$scope', '$timeout', 'SignupService', 'MenuService'];
    function SignupController($scope, $timeout, SignupService, MenuService) {
        var ctrl = this;

        ctrl.submit = function () {
            SignupService.register(ctrl.user);
            ctrl.registered = true;
        }

        ctrl.checkValidity = function(){
            $scope.dishinvalid = true;

            if(!ctrl.user.favdish){
                return false;
            }

            MenuService.checkValidity(ctrl.user.favdish).then(function (valid) {
                if(valid){
                    $timeout(function () {
                        $scope.regForm.favdish.$invalid = false;
                        $scope.dishinvalid = false;
                    });
                }
                else {
                    $timeout(function () {
                        $scope.regForm.favdish.$invalid = true;
                    });
                }
            })
        }
    }
})();