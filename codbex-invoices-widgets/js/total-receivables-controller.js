angular.module('total-receivables', ['ideUI', 'ideView'])
    .controller('totalReceivablesController', ['$scope', '$document', '$http', 'messageHub', function ($scope, $document, $http, messageHub) {
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
            });

    }]);