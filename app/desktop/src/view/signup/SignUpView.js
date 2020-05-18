'use strict';

Ext.define('MyApp.view.signup.SignUpView', {
    extend: 'Ext.form.Panel',
    xtype: 'signupview',
    requires: [],
    controller: { type: 'signupviewcontroller' },
    viewModel: { type: 'signupviewmodel' },
    layout: { type: 'form', align: 'begin', pack: 'begin' },
    maxWidth: 360,
    autoSize: true,
    defaultType: 'textfield',
    defaults: {
        required: true,
        requiredMessage: 'Обязательно к заполнению!',
    },
    items: [
        {
            label: 'Фамилия',
            name: 'lastName',
            bind: '{lastName}',
            placeholder: 'Иванов',
        },
        {
            label: 'Имя',
            name: 'firstName',
            bind: '{firstName}',
            placeholder: 'Иван',
        },
        {
            label: 'Отчество',
            name: 'patronymicName',
            bind: '{patronymicName}',
            required: false,
            placeholder: 'Иванович',
        },
        {
            xtype: 'passwordfield',
            label: 'Пароль',
            name: 'password',
        },
        {
            xtype: 'passwordfield',
            label: 'Повторите пароль',
            name: 'passwordVerify',
        },
    ],
    buttons: [
        {
            text: 'Очистить',
            formBind: true,
            handler: 'onResetFormClick',
        },
        {
            text: 'Регистрация',
            formBind: true,
            ui: 'action',
            handler: 'onSignUpClick',
        },
    ],
});
