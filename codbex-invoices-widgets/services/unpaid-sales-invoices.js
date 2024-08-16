const viewData = {
    id: 'unpaid-sales-invoices-widget',
    label: 'Unpaid Sales Invoices Widget',
    link: '/services/web/codbex-invoices-widgets/subviews/unpaid-sales-invoices.html',
    lazyLoad: true
};

if (typeof exports !== 'undefined') {
    exports.getView = function () {
        return viewData;
    }
}