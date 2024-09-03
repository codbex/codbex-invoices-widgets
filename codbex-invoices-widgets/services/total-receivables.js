const widgetData = {
    id: 'total-receivables-widget',
    label: 'Total Receivables Widget',
    link: '/services/web/codbex-invoices-widgets/subviews/total-receivables.html',
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