const button3 = document.getElementById('button-3'),
  buttonSolve = document.getElementById('button-3-1'),
  employees = {},
  nameEmployee = document.getElementById('nameEmployee'),
  solution3 = document.querySelector('.solution-3'),
  tasksEmployee = document.getElementById('tasksEmployee');

const findBestEmployee = (obj) => {
  let bestEmployees = [],
    maxTasks = 0;

  for (const entry of Object.entries(obj)) {
    if (maxTasks < entry[1]) {
      bestEmployees = [];
      maxTasks = +entry[1];
      bestEmployees.push(entry[0]);
    } else if (maxTasks === +entry[1]) {
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
const handleButton3Click = (event) => {
  event.preventDefault();
  Tinycon.setBubble(3);
  employees[nameEmployee.value] = tasksEmployee.value;
  console.log(employees);
};
const handleButtonSolveClick = () => {
  const resultArray = findBestEmployee(employees);
  solution3.textContent = '';
  if (Object.keys(employees).length) {
    solution3.insertAdjacentHTML(
      'beforeend',
      `<p>${resultArray[0]} <span class="task3-span">${resultArray[1]}</span>${resultArray[2]}</p>`
    );
    document.querySelector('.task3-span').style.color = '#2ac940';
  } else {
    alert('Внесите в базу хотя бы одного сотрудника!');
  }
};

button3.addEventListener('click', handleButton3Click);
buttonSolve.addEventListener('click', handleButtonSolveClick);
