/**
 * Created by 你猜 on 2017/10/15.
 */
app.factory('ajaxService', ['$http', '$q', function($http, $q){
    return {
        ajax:function(type, url){
            var def = $q.defer();
            $http({
                url: url,
                method: type
            }).success(function(data){
                def.resolve(data);
            }).error(function(err){
                def.reject(err)
            })
            return def.promise;
        }
    }
}])