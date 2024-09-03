const widgetData = {
    id: 'unpaid-sales-invoices-widget',
    label: 'Unpaid Sales Invoices Widget',
    link: '/services/web/codbex-invoices-widgets/subviews/unpaid-sales-invoices.html',
    lazyLoad: true,
    cssSize: "fd-col fd-col--12 fd-col-md--6 fd-col-lg--6 fd-col-xl--6"
};

export function getWidget() {
    return widgetData;
}

if (typeof exports !== 'undefined') {
    exports.getWidgets = function () {
        return widgetData;
    }
}