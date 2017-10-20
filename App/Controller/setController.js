/**
 * Created by 你猜 on 2017/10/15.
 */
app.controller('setController', ['$scope', 'userInfoService', function($scope, userInfoService){
    userInfoService.userInfo().then(function(data){
       $scope.sets = data;
    });
}]);