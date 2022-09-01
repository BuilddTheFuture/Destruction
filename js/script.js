'use strict';

// let arr = ['John', 'Smit', 'development', 'programmer', 2000]; 
// let [name, surname, department, position, salary] = arr;
// console.log('Имя - ' + name)

// function func() {
// 	return [2025, 12, 31];
// }
// let [year, month, day] = func(); // Деструктуризируем возвращаемое этой функцией значение
// console.log(month); // 12

// function func() {
// 	return ['John', 'Smit', 'development', 'programmer', 2000]; 
// }
// let [name, surname, department, position, salary] = func();
// console.log(salary); // 2000

// пропуск элементов с помощью ","
// let arr = [2025, 12, 31];
// let [, month, day] = arr;
// console.log(month); // выведет 12
// console.log(day);   // выведет 31

// let arr = ['John', 'Smit', 'development', 'programmer', 2000]; 
// let [,, department, position ,] = arr;
// console.log(department, position); // development programmer

// let arr = [2025, 12];
// let [year, month, day] = arr;
// console.log(year);  // выведет 2025
// console.log(month); // выведет 12
// console.log(day);   // выведет undefined

// let arr = [2025, 12, 31, 23, 59, 59];
// let [year, month, day, ...time] = arr;
// console.log(year);  // выведет 2025
// console.log(month); // выведет 12
// console.log(day);   // выведет 31
// // лишние элементы записали с помощью rest
// console.log(time);  // выведет [23, 59, 59]

// let arr = ['John', 'Smit', 'development', 'programmer', 2000];
// let [name, surname, ...info] = arr;
// console.log (name, surname, info[0], info[1], info[2])

// let arr = ['John', 'Smit', 'development', 'programmer'];
// let [name, surname, department, position = 'trainee'] = arr;
// console.log(position); // programmer

// let arr = [2022, 8, 30];
// function func() {
// 	return (new Date).getDate();
// }
// let [year, month = func(), day = func()] = arr;
// console.log (year, month, day) // 2022 8 30

// let arr = [2022, 8];
// function func() {
// 	return (new Date).getDate();
// }
// let [year, month = func(), day = func()] = arr;
// console.log (year, month, day) // 2022 8 31

// let options = {
// 	color: 'red',
// 	width:  400,
// 	height: 500,
// };
// let {color, width, height} = options;
// console.log(height); // 500

// let options = {
// 	color: 'red',
// 	width:  400,
// 	height: 500,
// };
// let {color: c, width: w, height: h} = options;
// console.log(w); // 400

// let options = {
// 	width:  400,
// 	height: 500,
// };
// let {color = 'black', width, height} = options;
// console.log(color) // black

// let options = {
//     color: 'red',
// 	width:  400,
// 	height: 500,
// };
// let {color = 'black', width, height} = options;
// console.log(color) // red

// let options = {
// 	width:  400,
// 	height: 500,
// };
// let {color: c = 'black', width, height} = options;

// console.log(c) // black

// function func([name, surname, department, position, salary]) {
//     console.log(name, surname);
//     console.log(position);
// }
// func( ['John', 'Smit', 'development', 'programmer', 2000] );

// function func([name, surname, info, ...other]) { 
//     console.log(surname);
//     console.log(other);
// }
// func( ['John', 'Smit', 'development', 'programmer', 2000] );

// function func([name, surname, department, position = 'junior']) {
//     console.log(position); // junior
// }
// func( ['John', 'Smit', 'development'] );

// function func(department, [name, surname], [year, month, day]) {
//     console.log(name, month); // John 12 
// }
// func( 'development', ['John', 'Smit'], [2018, 12, 31] );

// function func({color, width, height}) {
// 	console.log(color); // red
// }
// func( {color: 'red', width: 400, height: 500} );

// function func({color = 'black', width, height}) {
// 	console.log(color); // red
// }
// func( {color: 'red', width: 400, height: 500} );
































