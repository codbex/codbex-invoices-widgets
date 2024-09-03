const widgetData = {
    id: 'gross-profit-widget',
    label: 'Gross Profit Widget',
    link: '/services/web/codbex-invoices-widgets/subviews/gross-profit.html',
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