
//controller to hold the feed page logic
app.controller('FeedPageController',function($scope,bookApplicationService)
	{
	console.log("inside feed page controller");
	getFeedDetails();
	function getFeedDetails()
	{
		$scope.feedArray=bookApplicationService.getFeedDetails();
	}
	$scope.insertNewFeed= function()
	{
		var feed =$scope.newFeed;
		var date= dateTime()
		bookApplicationService.insertNewFeed(feed,date)
		$scope.newFeed='Text Feed or URL Feed';
	}
	$scope.deleteFeed=function(feedName)
	{
	console.log("inside deleteFeed controller");
		bookApplicationService.deleteFeed(feedName);
	}
	function dateTime()
        {
            console.log("Inside dateTime");
            var date = new Date();
            if(date.getHours() > 12)
            {
                hours = (date.getHours() - 12).toString();
                amOrpm = "PM";
            }
            else
            {
                hours = date.getHours().toString();
                amOrpm = "AM";
            }
            return (date.getDate().toString() + "-" + (date.getMonth() + 1).toString() + "-" 
            + date.getFullYear().toString() + " " + hours + ":" + date.getMinutes().toString() + " " + amOrpm);
        }

	});
	
//controller to hold the profile page logic
app.controller('ProfilePageController',function($scope,bookApplicationService){
	$scope.saveUserProfile=function() {
			var userName=$scope.userName;
			var age=$scope.age;
			var phone=$scope.phone;
			var email=$scope.email;
			var address=$scope.address;
			var output = document.getElementById('output');
			var dataURL=output.src;
			var data=dataURL.split("base64,")[1];
			console.log("data"+data);
			bookApplicationService.saveUserProfile(userName,age,phone,email,address,data);
			$scope.userName='';
			$scope.age='';
			$scope.phone='';
			$scope.email='';
			$scope.address='';
		};
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