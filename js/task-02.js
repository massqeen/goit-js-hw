const button2 = document.getElementById('button-2'),
  solution2 = document.querySelector('.solution-2'),
  userAge = document.getElementById('userAge'),
  userFollowers = document.getElementById('userFollowers'),
  userName = document.getElementById('userName');

class User {
  constructor(name, age, followers) {
    this.name = name;
    this.age = age;
    this.followers = followers;
  }
  getInfo() {
    return `User ${this.name} is ${this.age} years old and has ${this.followers} followers`;
  }
}

const handleButtonClick = (event) => {
  event.preventDefault();
  Tinycon.setBubble(2);
  const user = new User(userName.value, userAge.value, userFollowers.value);
  console.log(user);
  solution2.textContent = user.getInfo();
};

button2.addEventListener('click', handleButtonClick);
