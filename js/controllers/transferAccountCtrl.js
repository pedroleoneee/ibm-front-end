angular.module("appIBM").controller("transferAccountCtrl", function($scope, transferAccountAPI, accounts) {
    $scope.accounts = accounts.data;

    $scope.saveTransfer = function(transfer) {
    	if (transfer.creditAccount != null && transfer.debitAccount != null) {    		   		
	    	if (transfer.creditAccount != transfer.debitAccount) {    		   		
		        transferAccountAPI.saveTransfer(transfer)
		            .success(function(data) {
		                console.log("Transferência feita com sucesso" + data);
		                $scope.transfer = null;
		                Materialize.toast('Sua transferencia foi concluida com sucesso!', 5000, 'rounded')
		            });
	    	} else
		        Materialize.toast('As contas são iguais. Escolha uma conta diferente para destino!', 5000, 'rounded')
		} else
		    Materialize.toast('Escolha as contas de debito e crédito para fazer a transferência!', 5000, 'rounded')
    };
});
