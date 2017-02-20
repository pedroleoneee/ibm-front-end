angular.module("appIBM").factory("transferAccountAPI", function($http, config) {
    var _getAccounts = function() {
        return $http.get(config.baseUrl + "/accounts");
    };

    var _saveTransfer = function(transfer) {
        return $http.post(config.baseUrl + "/transfer", transfer);
    };

    return {
        getAccounts: _getAccounts,
        saveTransfer: _saveTransfer
    };
});
