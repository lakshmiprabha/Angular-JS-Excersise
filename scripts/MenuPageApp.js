
// route provider to route to either Feed Page or the Profile Page

var app=angular.module('MenuPageApp',['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
	.when('/FeedPage',
	{
		controller:'FeedPageController',
		templateUrl:'FeedPage.html'
	})
	.when('/ProfilePage',
	{
		controller:'ProfilePageController',
		templateUrl:'ProfilePage.html'
	})
	.otherwise({ redirectTo: '/FeedPage' });
});