var myApp = angular.module('myApp',[]);
myApp.controller('MyCtrl',function($scope) {
console.log("inside controllers");
    $scope.openFile = function(){
	console.log("Inside open file");
      var f = document.getElementById('file').files[0],
          r = new FileReader();
      r.onloadend = function(e){
	  console.log("onload");
        $scope.data = e.target.result;
      }
      r.readAsDataURL(f);
    };
});