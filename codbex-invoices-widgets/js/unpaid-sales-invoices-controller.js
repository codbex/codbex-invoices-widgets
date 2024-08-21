const dashboard = angular.module('gross-profit', ['ideUI', 'ideView']);

dashboard.controller('grossProfitController', ['$scope', '$document', '$http', 'messageHub', function ($scope, $document, $http, messageHub) {
    $scope.state = {
        isBusy: true,
        error: false,
        busyText: "Loading...",
    };

    debugger
    $scope.today = new Date();


    const productServiceUrl = "/services/ts/codbex-hestia/api/ProductService.ts/productData";
    $http.get(productServiceUrl)
        .then(function (response) {
            $scope.ProductData = response.data;
        });

    async function getProductData() {
        try {
            const response = await $http.get("/services/ts/codbex-hestia/api/ProductService.ts/productData");
            return response.data;
        } catch (error) {
            console.error('Error fetching product data:', error);
        }
    }

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

    angular.element($document[0]).ready(async function () {
        const productData = await getProductData();
        $scope.$apply(function () {
            $scope.topProductsByUnits = productData.TopProductsByUnits;
            $scope.topProductsByRevenue = productData.TopProductsByRevenue;
            $scope.displayedProducts = $scope.topProductsByUnits; // Default display
        });
    });

    $scope.displayByUnits = function () {
        $scope.displayedProducts = $scope.topProductsByUnits;
    };

    $scope.displayByRevenue = function () {
        $scope.displayedProducts = $scope.topProductsByRevenue;
    };

}]);