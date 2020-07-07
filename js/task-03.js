const button3 = document.getElementById('button-3'),
  buttonSolve = document.getElementById('button-3-1'),
  solution3 = document.querySelector('.solution-3'),
  test = {
    ann: 22,
    david: 22,
    helen: 1,
    lorence: 0
  };
let nameEmployee = document.getElementById('nameEmployee'),
  tasksEmployee = document.getElementById('tasksEmployee');

const findBestEmployee = (obj) => {
  let bestEmployees = [],
    maxTasks = 0;

  for (const entry of Object.entries(obj)) {
    if (maxTasks < entry[1]) {
      bestEmployees = [];
      maxTasks = entry[1];
      bestEmployees.push(entry[0]);
    } else if (maxTasks === entry[1]) {
      bestEmployees.push(entry[0]);
    }
  }
  if (bestEmployees.length > 1) {
    return [
      'Самые продуктивные сотрудники: ',
      bestEmployees.join(', ') + '; ',
      `выполнено ${maxTasks} задач.`
    ];
  }
  return [
    'Самый продуктивный сотрудник: ',
    bestEmployees.join(', ') + '; ',
    `выполнено ${maxTasks} задач.`
  ];
};

console.log(findBestEmployee(test));
// button3.addEventListener('click', (event) => {
//   event.preventDefault();
//   Tinycon.setBubble(3);
// });
