const dashboard = angular.module('total-receivables', ['ideUI', 'ideView']);

dashboard.controller('totalReceivablesController', ['$scope', '$document', '$http', 'messageHub', function ($scope, $document, $http, messageHub) {
    $scope.state = {
        isBusy: true,
        error: false,
        busyText: "Loading...",
    };

    $scope.today = new Date();


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

    async function getOrderData() {
        try {
            const response = await $http.get("/services/ts/codbex-hestia/api/OrderService.ts/orderData");
            return response.data;
        } catch (error) {
            console.error('Error fetching order data:', error);
        }
    }

    angular.element($document[0]).ready(async function () {
        const orderData = await getOrderData();
        $scope.topSalesOrders = orderData.TopSalesOrders;
    });

    angular.element($document[0]).ready(async function () {
        const orderData = await getOrderData();
        $scope.topPurchaseOrders = orderData.TopPurchaseOrders;
    });

    angular.element($document[0]).ready(async function () {
        const orderData = await getOrderData();
        $scope.$apply(function () {
            $scope.topCustomers = orderData.TopCustomers;
        });
    });

}]);