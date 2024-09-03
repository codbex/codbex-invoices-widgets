const widgetData = {
    id: 'total-sales-widget',
    label: 'Total Sales Widget',
    link: '/services/web/codbex-invoices-widgets/subviews/total-sales.html',
    lazyLoad: true,
    cssSize: "fd-col fd-col--6 fd-col-md--3 fd-col-lg--3 fd-col-xl--3"
};

export function getWidget() {
    return widgetData;
}

if (typeof exports !== 'undefined') {
    exports.getWidget = function () {
        return widgetData;
    }
}