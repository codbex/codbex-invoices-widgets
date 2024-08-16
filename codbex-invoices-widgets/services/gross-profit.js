const viewData = {
    id: 'gross-profit-widget',
    label: 'Gross Profit Widget',
    link: '/services/web/codbex-invoices-widgets/subviews/gross-profit.html',
    lazyLoad: true
};

if (typeof exports !== 'undefined') {
    exports.getView = function () {
        return viewData;
    }
}