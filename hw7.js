// // Задача 1

// let str="Привет";
// str=str.toUpperCase();
// console.log(str);

// // Задача 2

// function searchStart(arr, str) {
// return arr.filter((item)=>
// item.toLowerCase().startsWith(str.toLowerCase()) 
//  );
// }
// console.log(searchStart(['Кошка', 'Кит', 'Комар', 'Носорог'],'ко'));


// // Задача 3

// const numb=32.58884;
// console.log(Math.ceil(numb));
// console.log(Math.floor(numb));
// console.log(Math.round(numb));

// // Задача 4

// const arr = [52, 53, 49, 77, 21, 32];
// console.log(Math.min(...arr));
// console.log(Math.max(...arr));

// Задача 5

// function random(max,min) {
//     console.log(Math.round(Math.random()*(max-min)+min));
// }
// random(1,10);


// Задача 6


// function getRandomArrNumbers(n) {
//     const arr = [];
//     let i = n / 2;
//     i = Math.floor(i);
//     for (let index = 0; index < i; index++) {
//         arr.push(Math.round(Math.random() * n))

//     };
//    return arr;
// }
// getRandomArrNumbers(7);


// // Задача 7

// function randomFromTwo(a,b) {
//     return Math.round(Math.random()*(a-b)+b);
// }
// randomFromTwo(2,9);


// // Задача 8
// let myDate = new Date();

// console.log(myDate);

// // Задача 9

// let currentDate = new Date();
// currentDate.setDate(currentDate.getDate()+73);
// console.log(currentDate);

// // Задача 10

// function ruDateTime(date) {
//     const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
//     const months = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"];
    
    
//     return `Дата: ${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()} - это ${days[date.getDay()]
//     }\nВремя: ${date.toLocaleTimeString()}`;

// }
// console.log(ruDateTime(new Date()));
