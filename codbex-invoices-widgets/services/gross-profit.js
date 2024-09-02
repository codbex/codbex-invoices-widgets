const widgetData = {
    id: 'gross-profit-widget',
    label: 'Gross Profit Widget',
    link: '/services/web/codbex-invoices-widgets/subviews/gross-profit.html',
    lazyLoad: true,
    order: 1
};

export function getWidget() {
    return widgetData;
}

if (typeof exports !== 'undefined') {
    exports.getWidget = function () {
        return widgetData;
    }
}