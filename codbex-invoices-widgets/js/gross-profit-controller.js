angular.module('gross-profit', ['ideUI', 'ideView'])
    .controller('grossProfitController', ['$scope', '$http', function ($scope, $http) {
        $scope.state = {
            isBusy: true,
            error: false,
            busyText: "Loading...",
        };

        const invoiceServiceUrl = "/services/ts/codbex-hestia/api/InvoiceService.ts/invoiceData";
        $http.get(invoiceServiceUrl)
            .then(function (response) {
                $scope.InvoiceData = response.data;
                calculateGrossProfit();
            });

        const orderServiceUrl = "/services/ts/codbex-hestia/api/OrderService.ts/orderData";
        $http.get(orderServiceUrl)
            .then(function (response) {
                $scope.OrderData = response.data;
                calculateGrossProfit();
            });

        function calculateGrossProfit() {
            if ($scope.InvoiceData && $scope.OrderData) {
                $scope.GrossProfit = (($scope.InvoiceData.SalesInvoiceTotal + $scope.OrderData.SalesOrderTotal) - ($scope.InvoiceData.PurchaseInvoiceTotal + $scope.OrderData.PurchaseOrderTotal)).toFixed(2);
            }
        }
    }]);