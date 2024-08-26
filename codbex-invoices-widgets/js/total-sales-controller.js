angular.module('total-sales', ['ideUI', 'ideView'])
    .controller('totalSalesController', ['$scope', '$document', '$http', 'messageHub', function ($scope, $document, $http, messageHub) {
        $scope.state = {
            isBusy: true,
            error: false,
            busyText: "Loading...",
        };


        const invoiceServiceUrl = "/services/ts/codbex-hestia/api/InvoiceService.ts/invoiceData";
        $http.get(invoiceServiceUrl)
            .then(function (response) {
                $scope.InvoiceData = response.data;
            });

    }]);