export class UsersHandler {
  getUserNames = (arrOfObj) => arrOfObj.map((obj) => obj.name);

  getUsersWithEyeColor = (arrOfObj, color) =>
    arrOfObj.filter((obj) => obj.eyeColor === color);

  getUsersWithGender = (arrOfObj, gender) => {
    const genderArrayOfObj = arrOfObj.filter((obj) => obj.gender === gender);
    return genderArrayOfObj.map((obj) => obj.name);
  };

  getInactiveUsers = (arrOfObj) => arrOfObj.filter((obj) => !obj.isActive);

  getUserWithEmail = (arrOfObj, email) =>
    arrOfObj.find((obj) => obj.email === email);

  getUsersWithAge = (arrOfObj, min, max) =>
    arrOfObj.filter((obj) => obj.age >= min && obj.age <= max);

  calculateTotalBalance = (arrOfObj) =>
    arrOfObj.reduce((acc, obj) => acc + obj.balance, 0);

  getUsersWithFriend = (arrOfObj, friendName) => {
    const notFilteredUsers = arrOfObj.map((obj) =>
      obj.friends.includes(friendName) ? obj.name : false
    );
    return notFilteredUsers.filter((item) => item);
  };

  getNamesSortedByFriendsCount = (arrOfObj) => {
    const sortedUsersObj = [...arrOfObj].sort(
      (obj1, obj2) => obj1.friends.length - obj2.friends.length
    );
    return sortedUsersObj.map((obj) => obj.name);
  };

  getSortedUniqueSkills = (arrOfObj) => {
    const set = new Set();
    const uniqueSkills = [];
    arrOfObj.forEach((obj) => obj.skills.forEach((skill) => set.add(skill)));
    set.forEach((val) => uniqueSkills.push(val));
    return uniqueSkills.sort();
  };
}
