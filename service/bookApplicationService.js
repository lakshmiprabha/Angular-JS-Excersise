/* This file handles the service part to add a new user in the profile page
and also adds new feed into the feed array	
 */
	
app.service('bookApplicationService', function(){
	
	console.log("inside book app service");
	
	this.saveUserProfile=function(userName,age,phone,email,address,data){
		userDetails.push({
		userName: userName,
		age:age,
		phone:phone,
		email: email,
		address:address,
		data:data
		});
		console.log("after push"+userDetails.length);
	};
	
	this.insertNewFeed=function(newFeed,date)
	{
		feedArray.push({
		name:newFeed,
		date:date
		});
		console.log("after push"+feedArray.length);
	}
	this.getFeedDetails= function()
	{
		return feedArray;
	}
	this.deleteFeed=function(feedName)
	{
	console.log("inside delete feed service"+feedName);
	 for(var i=0,x=feedArray.length;i<x;i++)
		{
		console.log("inside for loop");
			if(feedName==feedArray[i]["name"])
			{
			console.log("ifff matched");
				feedArray.splice(i,1);
				break;
			}
		}
	}
var userDetails=[
	{ 
		userName:"Lakshmi",age:20,phone: 9952431253,email:"lakshmi.n@gmail.com",address:"acfada",data:""
	},
	{ 
		userName:"Prasanna",age:27,phone: 8939930741,email:"prasanna.r@gmail.com",address:"asasa",data:""
	}
];
var feedArray=[
{
	name:"This is my first feed",
	date:"4-11-2014 9:05 PM"
},
{
	name:"This is my second feed",
	date:"4-11-2014 9:06 PM"
},
{
	name:"www.google.com",
	date:"4-11-2014 9:07 PM"
}
];
});