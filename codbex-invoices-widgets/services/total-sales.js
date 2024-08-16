const viewData = {
    id: 'total-sales-widget',
    label: 'Total Sales Widget',
    link: '/services/web/codbex-invoices-widgets/subviews/total-sales.html',
    lazyLoad: true
};

if (typeof exports !== 'undefined') {
    exports.getView = function () {
        return viewData;
    }
}