/**
 * Created by 你猜 on 2017/10/15.
 */
app.factory('userInfoService', ['ajaxService', function(ajaxService){
    var factory = {
        userInfo: function(){
            var userInfo = ajaxService.ajax('get', 'http://localhost:9000/?data');
            return userInfo;
        }
    };
    return factory;
}]);