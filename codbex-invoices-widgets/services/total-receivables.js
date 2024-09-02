const widgetData = {
    id: 'total-receivables-widget',
    label: 'Total Receivables Widget',
    link: '/services/web/codbex-invoices-widgets/subviews/total-receivables.html',
    lazyLoad: true,
    order: 3
};

export function getWidget() {
    return widgetData;
}

if (typeof exports !== 'undefined') {
    exports.getWidget = function () {
        return widgetData;
    }
}