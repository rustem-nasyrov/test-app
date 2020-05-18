'use strict';
Ext.define('MyApp.view.orglist.OrgListView', {
    extend: 'Ext.panel.Panel',
    xtype: 'orglistview',
    requires: ['Ext.grid.Grid', 'Ext.form.Panel'],
    viewModel: { type: 'orglistviewmodel' },
    layout: 'hbox',
    referenceHolder: true,
    items: [
        {
            xtype: 'grid',
            bind: '{list}',
            flex: 1,
            reference: 'orgList',
            columns: [
                {
                    text: 'Наименование компании',
                    dataIndex: 'companyName',
                    flex: 1,
                },
                {
                    text: 'ИНН',
                    dataIndex: 'inn',
                    flex: 1,
                },
                {
                    text: 'КПП',
                    dataIndex: 'kpp',
                    flex: 1,
                },
                {
                    text: 'ОГРН',
                    dataIndex: 'ogrn',
                    flex: 1,
                },
                {
                    text: 'Адрес',
                    dataIndex: 'address',
                    flex: 1,
                },
            ],
        },
        {
            xtype: 'formpanel',
            defaultType: 'textfield',
            minWidth: 400,
            items: [
                {
                    label: 'Наименование',
                    placeholder: 'Наименование',
                    name: 'field-companyName',
                    bind: '{orgList.selection.companyName}',
                },
                {
                    label: 'ИНН',
                    placeholder: 'ИНН',
                    name: 'field-inn',
                    bind: '{orgList.selection.inn}',
                },
                {
                    label: 'КПП',
                    placeholder: 'КПП',
                    name: 'field-kpp',
                    bind: '{orgList.selection.kpp}',
                },
                {
                    label: 'ОГРН',
                    placeholder: 'ОГРН',
                    name: 'field-ogrn',
                    bind: '{orgList.selection.ogrn}',
                },
                {
                    label: 'Адрес',
                    placeholder: 'Адрес',
                    name: 'field-address',
                    bind: '{orgList.selection.address}',
                },
            ],
        },
    ],
});
