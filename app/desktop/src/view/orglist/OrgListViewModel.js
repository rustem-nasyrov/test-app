Ext.define('MyApp.view.orglist.OrgListViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.orglistviewmodel',
    stores: {
        list: {
            data: [
                { companyName: 'ООО "Рога и Копыта"', inn: '123456', kpp: '78910', ogrn: '11223344', address: 'Москва, Тверской, Красная площадь, 1' },
                { companyName: 'АО "Вектор"', inn: '123456', kpp: '78910', ogrn: '11223344', address: 'Москва, Тверской, Красная площадь, 1' },
                { companyName: 'ИП "Иванов С.Р."', inn: '123456', kpp: '78910', ogrn: '11223344', address: 'Москва, Тверской, Красная площадь, 1' },
                { companyName: 'Общество с ограниченной ответственностью "Рога и Копыта"', inn: '123456', kpp: '78910', ogrn: '11223344', address: 'Москва, Тверской, Красная площадь, 1' },
                { companyName: 'ИП "Весёлый молочник"', inn: '123456', kpp: '78910', ogrn: '11223344', address: 'Москва, Тверской, Красная площадь, 1' },
            ],
        },
    },
});
