angular.module('total-sales', ['ideUI', 'ideView'])
    .controller('totalSalesController', ['$scope', '$document', '$http', 'messageHub', function ($scope, $document, $http, messageHub) {
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


        const invoiceServiceUrl = "/services/ts/codbex-hestia/api/InvoiceService.ts/invoiceData";
        $http.get(invoiceServiceUrl)
            .then(function (response) {
                $scope.InvoiceData = response.data;
            });

    }]);