'use strict';
const ADMIN_PASSWORD = 'jqueryismyjam';
let message;
let passRequest = prompt('Введите пароль администратора');

if (passRequest) {
    passRequest === ADMIN_PASSWORD ? message = 'Добро пожаловать!' : message = 'Доступ запрещен, неверный пароль!';
} else message = 'Отменено пользователем!';

alert(message);