// Write your solution in this file!
const employee = {
    name: "Jane",
    streetAddress: "NewYork123  ",
}
function updateEmployeeWithKeyAndValue(obj, key, value) {
    const newEmployee = {...obj}
    newEmployee[key] = value;
    return newEmployee;
}
function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
      obj[key] = value;
      return obj;
}
function deleteFromEmployeeByKey(obj, key){
    const newEmployee = {...obj}

    delete newEmployee[key]
    return newEmployee;
}
function destructivelyDeleteFromEmployeeByKey(obj, key){
         delete obj[key];
         return obj;
}
// let mealName = "lunch";
// const meals = {
//   [mealName]:"Meat"
// }

// console.log(meals[mealName])
// console.log(Object.keys(meals))
