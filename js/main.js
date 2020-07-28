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

const getUsersWithFriend = (arrOfObj, friendName) => {
  const notFilteredUsers = arrOfObj.map((obj) =>
    obj.friends.includes(friendName) ? obj.name : false
  );
  return notFilteredUsers.filter((item) => item);
};

const getNamesSortedByFriendsCount = (arrOfObj) => {
  const sortedUsersObj = [...arrOfObj].sort(
    (obj1, obj2) => obj1.friends.length - obj2.friends.length
  );
  return sortedUsersObj.map((obj) => obj.name);
};

const getSortedUniqueSkills = (arrOfObj) => {
  const set = new Set();
  const uniqueSkills = [];
  arrOfObj.forEach((obj) => obj.skills.forEach((skill) => set.add(skill)));
  set.forEach((val) => uniqueSkills.push(val));
  return uniqueSkills.sort();
};

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
// 8
console.log(getUsersWithFriend(users, 'Briana Decker'));
console.log(getUsersWithFriend(users, 'Goldie Gentry'));
// 9
console.log(getNamesSortedByFriendsCount(users));
// 10
console.log(getSortedUniqueSkills(users));
