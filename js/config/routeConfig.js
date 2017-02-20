angular.module("appIBM").config(function ($routeProvider) {
	$routeProvider.when("/transferAccount", {
		templateUrl: "view/transferAccount.html",
		controller: "transferAccountCtrl",
		resolve: {
			accounts: function (transferAccountAPI) {
				return transferAccountAPI.getAccounts();
			}
		}
	});
	
	$routeProvider.when("/error", {
		templateUrl: "view/error.html"
	});
	$routeProvider.otherwise({redirectTo: "/transferAccount"});
});