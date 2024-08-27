const widgetData = {
    id: 'total-payables-widget',
    label: 'Total Payables Widget',
    link: '/services/web/codbex-invoices-widgets/subviews/total-payables.html',
    lazyLoad: true
};

if (typeof exports !== 'undefined') {
    exports.getWidget = function () {
        return widgetData;
    }
}