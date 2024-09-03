const widgetData = {
    id: 'total-payables-widget',
    label: 'Total Payables Widget',
    link: '/services/web/codbex-invoices-widgets/subviews/total-payables.html',
    lazyLoad: true,
    cssSize: "fd-col fd-col--12 fd-col-md--6 fd-col-lg--6 fd-col-xl--6"
};

export function getWidget() {
    return widgetData;
}

if (typeof exports !== 'undefined') {
    exports.getWidget = function () {
        return widgetData;
    }
}