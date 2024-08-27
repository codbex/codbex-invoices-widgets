const widgetData = {
    id: 'total-sales-widget',
    label: 'Total Sales Widget',
    link: '/services/web/codbex-invoices-widgets/subviews/total-sales.html',
    lazyLoad: true,
    order: 4
};

if (typeof exports !== 'undefined') {
    exports.getWidget = function () {
        return widgetData;
    }
}