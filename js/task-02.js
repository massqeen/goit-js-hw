<<<<<<< HEAD
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
=======
const addItemBtn = document.getElementById('button-2-addItem'),
  addItemInput = document.getElementById('addItem'),
  removeItemBtn = document.getElementById('button-2-removeItem'),
  removeItemInput = document.getElementById('removeItem'),
  solution = document.querySelector('.solution-2');

const inventory = {
  items: ['Knife', 'Gas mask'],
  add(itemName) {
    console.log(`Adding ${itemName} to inventory`);
    this.items.push(itemName);
  },
  remove(itemName) {
    console.log(`Removing ${itemName} from inventory`);
    this.items = this.items.filter((item) => item !== itemName);
  }
};

const invokeInventoryAction = function (itemName, action) {
  console.log(`Invoking action on ${itemName}`);
  action(itemName);
};

const handleAddItemBtnClick = (event) => {
  event.preventDefault();
  Tinycon.setBubble(2);

  invokeInventoryAction(addItemInput.value, inventory.add.bind(inventory));
  solution.textContent = `В инвентаре: ${inventory.items.join(', ')}.`;
};

const handleRemoveItemBtnClick = (event) => {
  event.preventDefault();
  Tinycon.setBubble(2);

  invokeInventoryAction(
    removeItemInput.value,
    inventory.remove.bind(inventory)
  );
  solution.textContent = `В инвентаре: ${inventory.items.join(', ')}.`;
>>>>>>> 1652ee1d2a434292091dcaa4295b6aac04105084
};

addItemBtn.addEventListener('click', handleAddItemBtnClick);
removeItemBtn.addEventListener('click', handleRemoveItemBtnClick);
