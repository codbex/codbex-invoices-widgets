angular.module('total-payables', ['ideUI', 'ideView'])
    .controller('invoiceWidgetsController', ['$scope', '$document', '$http', 'messageHub', function ($scope, $document, $http, messageHub) {
        $scope.state = {
            isBusy: true,
            error: false,
            busyText: "Loading...",
        };

        const orderServiceUrl = "/services/ts/codbex-hestia/api/OrderService.ts/orderData";
        $http.get(orderServiceUrl)
            .then(function (response) {
                $scope.OrderData = response.data;
            });

    }]);