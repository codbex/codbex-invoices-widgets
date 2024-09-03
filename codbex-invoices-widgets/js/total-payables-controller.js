angular.module('total-payables', ['ideUI', 'ideView'])
    .controller('invoiceWidgetsController', ['$scope', '$document', '$http', 'messageHub', function ($scope, $document, $http, messageHub) {
        $scope.state = {
            isBusy: true,
            error: false,
            busyText: "Loading...",
        };

        $scope.openPerspective = function (perspective) {
            if (perspective === 'sales-orders') {
                messageHub.postMessage('launchpad.switch.perspective', { perspectiveId: 'sales-orders' }, true);
            } else if (perspective === 'products') {
                messageHub.postMessage('launchpad.switch.perspective', { perspectiveId: 'products' }, true);
            } else if (perspective === 'sales-invoices') {
                messageHub.postMessage('launchpad.switch.perspective', { perspectiveId: 'sales-invoices' }, true);
            }
            ;
        }

        const orderServiceUrl = "/services/ts/codbex-hestia/api/OrderService.ts/orderData";
        $http.get(orderServiceUrl)
            .then(function (response) {
                $scope.OrderData = response.data;
            });

    }]);