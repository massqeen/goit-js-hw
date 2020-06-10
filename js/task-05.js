'use strict';
let country = prompt('Укажите страну, куда нужно произвести доставку');
let price;

if (country) {
    country = country.toLowerCase();
}

function capitalizeFirstLetter(string) {
    return string[0].toUpperCase() + string.slice(1);
}

switch (country) {
    case 'китай':
        price = 100;
        console.log(`Доставка в ${capitalizeFirstLetter(country)} будет стоить ${price} кредитов`);
        break;

    case 'чили':
        price = 250;
        console.log(`Доставка в ${capitalizeFirstLetter(country)} будет стоить ${price} кредитов`);
        break;

    case 'австралия':
        price = 170;
        console.log(`Доставка в ${capitalizeFirstLetter(country)} будет стоить ${price} кредитов`);
        break;

    case 'индия':
        price = 80;
        console.log(`Доставка в ${capitalizeFirstLetter(country)} будет стоить ${price} кредитов`);
        break;

    case 'ямайка':
        price = 120;
        console.log(`Доставка в ${capitalizeFirstLetter(country)} будет стоить ${price} кредитов`);
        break;

    case null:
        break;

    default:
        alert('В вашей стране доставка не доступна');
}