'use strict';

Ext.define('MyApp.view.signup.SignUpViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.signupviewcontroller',
    onSignUpClick: onSignUpClick,
    onResetFormClick: onResetFormClick,
});

function onSignUpClick(btn) {
    const formPanel = btn.up('formpanel');
    if (formPanel.validate()) {
        Ext.create({
            xtype: 'dialog',
            title: 'Приветствие',
            maximizable: false,
            data: formPanel.getViewModel().getData(),
            buttons: {
                ok: function () {
                    this.up('dialog').destroy();
                },
            },
            tpl: 'Добро пожаловать, {firstName}!',
        }).show();
    }
}

function onResetFormClick(btn) {
    const formPanel = btn.up('formpanel');
    let formFields = formPanel.getFields(),
        resetValues = Object.keys(formFields).reduce((obj, key) => ({ ...obj, [key]: '' }), {});
    formPanel.setValues(resetValues);
}
