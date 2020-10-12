// #1 Фильтрация строки

// Создать переменную со строковым значением. Сформировать переменную которая будет состоять только из ГЛАСНЫХ букв этой строки. Результат вывести в консоль.

const string = "Привет! Как дела?";

let getVowels = (str) => {

let stringArr = [...str.toLowerCase()];
const vowels = ['а', 'е', 'ё', 'и', 'ы', 'о', 'у', 'ю', 'я'];
var vowelString = '';
var vowelArr = [];

vowelArr = stringArr.filter(char => {
   for (i=0; i<vowels.length; i++) {if (char === vowels[i]) {
     return char;
  } } });

 return vowelString = vowelArr.join('');
  
};

console.log(getVowels(string));


// #2 Выборка объекта

// Сформировать произвольный массив объектов, описывающий, например, работников компании, в каждом объекте должны содержаться сл. свойства (поля) - name (содержащее имя сотрудника) и поле salary (содержащее зарплату сотрудника от 0 до 3000). Сформировать функцию в которую будет передан в качестве аргумента этот массив и возвращен из функции массив содержащий имена всех сотрудников, чья зарплата превышает 1000.

const workers = [
  {"name":"John","salary":500},
  {"name":"Mike","salary":1300},
  {"name":"Linda","salary":1500}];

const getWorthyWorkers = employees => {


const worthyEmployees = employees.filter(employee => employee.salary >     1000);
return worthyEmployees;

};

console.log(getWorthyWorkers(workers));

// #3 Анализ строки

// Написать функцию которая будет принимать в качестве аргумента строку имитирующую адрес до файла. Функция должна возвращать true или false в зависимости от того есть у этого файла расширение html или нет.

      
const path = "/users/download/index";

const isHtml = p => p.endsWith('.html');

console.log(isHtml(path));
     
// #1 Фильтрация массива

// Создайте функцию которая в качестве аргумента принимает целое число, и проверяет четное оно или нет. Затем создайте произвольный массив целых чисел. И используя функцию проверки числа на четность, создайте из готового массива новый, который будет содержать только четные числа. Результат выведите в консоль.

      
const mixedArray = [3,13,74,14,66,15,22,4];
const isEven = num => Number.isInteger(num/2);

const filterArray = (arr, func) => {
  return arr.filter(num =>func(num));
}

console.log(filterArray(mixedArray, isEven));




