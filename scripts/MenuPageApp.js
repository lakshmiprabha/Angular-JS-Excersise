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