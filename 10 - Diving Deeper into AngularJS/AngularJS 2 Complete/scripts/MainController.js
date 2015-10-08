app.controller('MainController', ['$scope', '$http', function ($scope, $http) {
    $scope.timestamp = Date();
    $scope.smallnumber = 0;
    $scope.theMessage = "";
    $scope.checkNumber = function(){
        if (isNaN($scope.smallnumber) || $scope.smallnumber < 1 || $scope.smallnumber > 10) {
            $scope.theMessage = "Number was expected to be between 1 and 10";
        } else {
            $scope.theMessage = "Number is Good";
        }
    }
        
    $scope.Articles = [];
    $http({method: 'POST', url: 'http://choosetocodeapi.azurewebsites.net/api/articles', data: {
        ClassName: 'YourClassName',  //modify this for your class
        Count: 3    
    }}).then(function(result){
        $scope.Articles = result.data;
    });    
       
    var _first = "Your";
    var _last = "Name";
    $scope.User = {
        firstName: function (first) { return arguments.length ? (_first = first) : _first },
        lastName: function (last) { return arguments.length ? (_last = last) : _last },
        fullName: function () { return _first + ' ' + _last; }
    }
    
    
}]);