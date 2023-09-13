/* 
Задание 1
Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
0 – это ноль
1 – нечетное число
2 – четное число
3 – нечетное число
…
10 – четное число 
*/


/* const arr = [0,1,2,3,4,5,6,7,8,9,10];

for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] === 0) {
        console.log (`${arr[i]} - это ноль`)
    } else if (arr[i] % 2 === 0) {
        console.log (`${arr[i]} - четное число`)
    } else {
        console.log (`${arr[i]} - нечетное число`)
    }
} */

/* const arr = [0,1,2,3,4,5,6,7,8,9,10];

arr.forEach ((el) => {
    if (el === 0) {
        console.log (`${el} - это ноль`);
    } else if (el % 2 === 0) {
        console.log (`${el} - четное число`)
    } else {
        console.log (`${el} - нечетное число`)
    }
}) */

/* Задание 2
Дан массив [1, 2, 3, 4, 5, 6, 7]
Сделайте из этого массива следующий [1, 2, 3, 6, 7] */

/* let arr = [1,2,3,4,5,6,7].filter ((el) => el < 4 || el > 5);
console.log (arr); */

/* const throwNumbers = (values) => values < 4 || values > 5;
let arr = [1,2,3,4,5,6,7].filter (throwNumbers);
console.log (arr); */

/* let arr = [1,2,3,4,5,6,7];
arr.splice(3, 2);
console.log (arr); */



/* Задание 3
Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов
1. Рассчитать сумму элементов этого массива
2. Найти минимальное число
3. Найти есть ли в этом массиве число 3 */

/* function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
                                                
let arr = new Array(5);                         // Либо указать пустой массив let arr = [] и в условии прописать не i < arr.length, а arr.length < 5
                                                   
for (let i = 0; i < arr.length; i += 1) {       
    arr[i] = getRandomNumber(0, 10);            
}
console.log (`Массив из 5 элементов: [${arr}]`);

let sumResult = arr.reduce((sum, current) => sum + current, 0);
console.log (`1. Сумма элементов массива - ${sumResult};`);

let minResult = arr.reduce((a, b) => Math.min(a, b));
console.log (`2. Минимальное число массива - ${minResult};`);

let numThree = arr.includes(3)
console.log(numThree ? '3. Число 3 есть в массиве.' : '3. Числа 3 в массиве нет.'); */


/* *Необязательное задание. *
Необходимо вывести горку в консоль (используя цикл for), как показано на рисунке, только у вашей горки должно быть 20 рядов, а не 5:

x
xx
xxx
xxxx
xxxxx */

/* let level = '';
for (let i = 0; i < 20; i += 1) {
    level += 'x';
    console.log(level);
} */
