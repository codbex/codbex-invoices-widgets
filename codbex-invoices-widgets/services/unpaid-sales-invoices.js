const widgetData = {
    id: 'unpaid-sales-invoices-widget',
    label: 'Unpaid Sales Invoices Widget',
    link: '/services/web/codbex-invoices-widgets/subviews/unpaid-sales-invoices.html',
    lazyLoad: true,
    order: 5
};

export function getWidget() {
    return widgetData;
}

if (typeof exports !== 'undefined') {
    exports.getWidgets = function () {
        return widgetData;
    }
}