import users from './users.js';

const getUserNames = (arrOfObj) => arrOfObj.map((obj) => obj.name);
const getUsersWithEyeColor = (arrOfObj, color) =>
  arrOfObj.filter((obj) => obj.eyeColor === color);
const getUsersWithGender = (arrOfObj, gender) =>
  arrOfObj.filter((obj) => obj.gender === gender);
const getInactiveUsers = (arrOfObj) => arrOfObj.filter((obj) => !obj.isActive);
const getUserWithEmail = (arrOfObj, email) =>
  arrOfObj.find((obj) => obj.email === email);
const getUsersWithAge = (arrOfObj, min, max) =>
  arrOfObj.filter((obj) => obj.age >= min && obj.age <= max);
const calculateTotalBalance = (arrOfObj) =>
  arrOfObj.reduce((acc, obj) => acc + obj.balance, 0);

// 1
console.log(getUserNames(users));
// 2
console.log(getUsersWithEyeColor(users, 'blue'));
// 3
console.log(getUsersWithGender(users, 'male'));
// 4
console.log(getInactiveUsers(users));
// 5
console.log(getUserWithEmail(users, 'shereeanthony@kog.com'));
console.log(getUserWithEmail(users, 'elmahead@omatom.com'));
// 6
console.log(getUsersWithAge(users, 20, 30));
console.log(getUsersWithAge(users, 30, 40));
// 7
console.log(calculateTotalBalance(users));
