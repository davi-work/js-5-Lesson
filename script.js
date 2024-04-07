// // ОБЪЕКТЫ
// // ООП - Объектно-ориентированное программирование  

// // - Что такое объекты ? 
// // -Мы можем представить объекты в JavaScript как предметы, которые мы используем в повседневной жизни. Давайте рассмотрим несколько примеров.

// // Представьте, что у вас есть автомобиль. Автомобиль - это объект. У него есть определенные свойства, такие как цвет, марка, модель и год выпуска. Он также имеет функциональность, например, может двигаться, тормозить и включать фары. В JavaScript объект автомобиль может быть представлен следующим образом:

// // const car = {
// //   color: "синий",
// //   brand: "Toyota",
// //   model: "Camry",
// //   year: 2020,
// //   move: function() {
// //     console.log("Автомобиль движется");
// //   },
// //   brake: function() {
// //     console.log("Автомобиль тормозит");
// //   },
// //   turnOnLights: function() {
// //     console.log("Фары включены");
// //   }
// // };


// // также в виде объекта мы можем представить дом, самого человека - у них могут быть свои свойства.

// // Таким образом, объекты в JavaScript являются аналогией предметов в реальном мире и содержат свойства и функциональность, которые ими управляют.

// // const user = {} /* Принято создавать объекты через const для того чтобы они не ломались */

// const user = {  /* Можно указывать все типы данных */
//   name: "Ivan",
//   age: 45
// }
// // 
// console.log(user);
// // 
// user.name = "Admin"
// console.log(user);

// user.country = "Uzbekistan" /* Создание нового ключа */

// // Часто бывает нужно, что нам нужно узнать какого типа данных у нас переменная, для этого существует оператор typeof

// console.log(typeof user);
// console.log(typeof user.name);
// console.log(typeof user.age);

// console.log("name" in user);/* оператор in */
// /*  Это связано с тем, что свойства объекта в JavaScript являются строками, и когда мы обращаемся к свойству объекта, мы обычно указываем его имя в виде строки. */


// /* Циклы для объектов */

// for (const key in user)  {
//   console.log(key);
// }

// for (const key in user)  {
//   console.log(user[key]);
// }

const user = {
  name: "Alex",
  age: 23,
  ageAdd: function() { /* Метод  */
    return this.age++ /* Этот - объект в которым мы находимся*/
  }
}
console.log(user.age);
/* This работает только в контекстке объекта в котором находится */

user.ageAdd()
console.log(user);




// Двумерные объекты - объекты внутри объекта
const users = { 
  "1": {
    name: 'Backend', 
    age: 34
  }, 
  "2": {
    name: "Frontend", 
    age: 40
  }
}


/* После цикла */
let i = 3
users[i] = {
  name: 'devOps', 
  age: 45
}
// users[3] = { /* Сокращение */
//   name: 'devOps', 
//   age: 45
// }
/* После цикла */

for(const key in  users) {
  console.log(key);
  console.log(users[key]);
  for (const keyX in users[key]) {
      console.log(keyX);
      console.log(users[key][keyX]);
  }
}
for(const key in  users) {
  // console.log(key);
  // console.log(users[key]);
  const user = users[key]
  for (const keyX in user) {
      // console.log(keyX);
      const curUser = user[keyX]
      console.log(curUser);
  }
}
