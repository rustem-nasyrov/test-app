Ext.define('MyApp.view.main.MainViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.mainviewmodel',
    data: {
        name: 'MyApp',
        navCollapsed: false,
        navview_max_width: 300,
        navview_min_width: 44,
        topview_height: 75,
        bottomview_height: 50,
        headerview_height: 50,
        footerview_height: 50,
        detailCollapsed: true,
        detailview_width: 10,
        detailview_max_width: 300,
        detailview_min_width: 0,
    },
    formulas: {
        navview_width: function (get) {
            return get('navCollapsed') ? get('navview_min_width') : get('navview_max_width');
        },
        detailview_width: function (get) {
            return get('detailCollapsed') ? get('detailview_min_width') : get('detailview_max_width');
        },
    },
    stores: {
        menu: {
            type: 'tree',
            root: {
                expanded: true,
                children: [
                    { text: 'Home', iconCls: 'x-fa fa-home', xtype: 'homeview', leaf: true },
                    { text: 'Personnel', iconCls: 'x-fa fa-table', xtype: 'personnelview', leaf: true },
                    // Registration form panel added below
                    { text: 'Регистрация', iconCls: 'x-fa fa-user', xtype: 'signupview', leaf: true },
                    // Below is list of organisations with form
                    { text: 'Организации', iconCls: 'x-fa fa-list', xtype: 'orglistview', leaf: true },
                ],
            },
        },
    },
});
