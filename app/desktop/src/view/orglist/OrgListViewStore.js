'use strict';
Ext.define('MyApp.view.orglist.OrgListViewStore', {
    extend: 'Ext.data.Store',
    alias: 'store.orglistviewstore',
    fields: [
        { name: 'companyName', type: 'string' },
        { name: 'inn', type: 'string' },
        { name: 'kpp', type: 'string' },
        { name: 'ogrn', type: 'string' },
        { name: 'address', type: 'string' },
    ],
    data: {
        items: [{ companyName: '1', inn: '2', kpp: '3', ogrn: '4', address: '5' }],
    },
    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items',
        },
    },
});
