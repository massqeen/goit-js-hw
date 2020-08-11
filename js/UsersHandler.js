export class UsersHandler {
    getUserNames(arrOfObj) {
        return arrOfObj.map((obj) => obj.name);
    }

    getUsersWithEyeColor(arrOfObj, color) {
        return arrOfObj.filter((obj) => obj.eyeColor === color);
    }

    getUsersWithGender(arrOfObj, gender) {
        const genderArrayOfObj = arrOfObj.filter((obj) => obj.gender === gender);
        return genderArrayOfObj.map((obj) => obj.name);
    }

    getInactiveUsers(arrOfObj) {
        return arrOfObj.filter((obj) => !obj.isActive);
    }

    getUserWithEmail(arrOfObj, email) {
        return arrOfObj.find((obj) => obj.email === email);
    }

    getUsersWithAge(arrOfObj, min, max) {
        return arrOfObj.filter((obj) => obj.age >= min && obj.age <= max);
    }

    calculateTotalBalance(arrOfObj) {
        return arrOfObj.reduce((acc, obj) => acc + obj.balance, 0);
    }

    getUsersWithFriend(arrOfObj, friendName) {
        const notFilteredUsers = arrOfObj.map((obj) =>
            obj.friends.includes(friendName) ? obj.name : false
        );
        return notFilteredUsers.filter((item) => item);
    }

    getNamesSortedByFriendsCount(arrOfObj) {
        const sortedUsersObj = [...arrOfObj].sort(
            (obj1, obj2) => obj1.friends.length - obj2.friends.length
        );
        return sortedUsersObj.map((obj) => obj.name);
    }

    getSortedUniqueSkills(arrOfObj) {
        const allSkills = arrOfObj.reduce((acc, user) => [...acc, ...user.skills], []);
        return [...new Set(allSkills)].sort();
    }
//alternate getUniqueSkills function
    getSortedUniqueSkillsAlt(arrOfObj) {
        return arrOfObj
            .reduce((arr, obj) => [...arr, ...obj.skills], [])
            .filter((el, i, arr) => arr.indexOf(el) === i)
            .sort();
    }
}
