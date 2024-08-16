const viewData = {
    id: 'total-receivables-widget',
    label: 'Total Receivables Widget',
    link: '/services/web/codbex-invoices-widgets/subviews/total-receivables.html',
    lazyLoad: true
};

if (typeof exports !== 'undefined') {
    exports.getView = function () {
        return viewData;
    }
}