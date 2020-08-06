import { users } from './users.js';
import { UsersHandler } from './UsersHandler.js';

const usersHandler = new UsersHandler();

// 1
console.log('Задание 1: ', usersHandler.getUserNames(users));
// 2
console.log('Задание 2: ', usersHandler.getUsersWithEyeColor(users, 'blue'));
// 3
console.log('Задание 3: ', usersHandler.getUsersWithGender(users, 'male'));
// 4
console.log('Задание 4: ', usersHandler.getInactiveUsers(users));
// 5
console.log(
  'Задание 5: ',
  usersHandler.getUserWithEmail(users, 'shereeanthony@kog.com')
);
console.log(
  'Задание 5: ',
  usersHandler.getUserWithEmail(users, 'elmahead@omatom.com')
);
// 6
console.log('Задание 6: ', usersHandler.getUsersWithAge(users, 20, 30));
console.log('Задание 6: ', usersHandler.getUsersWithAge(users, 30, 40));
// 7
console.log('Задание 7: ', usersHandler.calculateTotalBalance(users));
// 8
console.log(
  'Задание 8: ',
  usersHandler.getUsersWithFriend(users, 'Briana Decker')
);
console.log(
  'Задание 8: ',
  usersHandler.getUsersWithFriend(users, 'Goldie Gentry')
);
// 9
console.log('Задание 9: ', usersHandler.getNamesSortedByFriendsCount(users));
// 10
console.log('Задание 10: ', usersHandler.getSortedUniqueSkills(users));
