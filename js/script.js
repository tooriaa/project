"use strict";

//задание 1
/*let famalyLoginStudent = {
    name: "имя_студента", 
    surname: "Фамилия_студента"
}
famalyLoginStudent.name = "имя_друга";
console.log(famalyLoginStudent);
delete famalyLoginStudent.name;*/


//задание 2
/*let salaries = {
    John:100,
    Ann: 160,
    Pete: 130,
    Alex: 200,
    Tom:150,
    Helena:100
}

let sum = 0;
for (let i in salaries) {
  sum += salaries[i];
  console.log(sum);
}
console.log('Итоговая сумма: '+ sum);
*/

//задание 3


//const answers = [];
//answers[0] = prompt("Как тебя зовут?");
//answers[1] = prompt("Какой твой любимый цвет?");
//answers[2] = prompt("Любишь ли ты рисовать?");

//document.write('Как тебя зовут? '+answers[0])
//document.write('<br \/> Какой твой любимый цвет? '+answers[1])
//document.write('<br \/> Любишь ли ты рисовать? '+answers[2])


/*//задание 4
for(let i = 20; i <= 45; i++)
{
    if (i % 2 == 0)
    {
        console.log(i)
    }
}*/


//задание 5
const answer = prompt("Введите число больше 100, но меньше 250.")
while ((answer < 100) | (answer > 250))
{
    answer = prompt('Число неверное, введите еще раз.')
}
/*
//задание 6
const persons = [
    {name:'John', age:25 },
    {name:'Leonardo', age:15 },
    {name:'Kristina', age:12 },
]

const persons18 = []

for(let i in persons)
{
    if (persons[i].age >= 18)
    {
        persons18[i]=persons[i];

    }
}
console.log(persons18);
*/


