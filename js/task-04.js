const button4 = document.getElementById('button-4'),
  buttonSolve = document.getElementById('button-4-1'),
  employees = {},
  nameEmployee = document.getElementById('nameEmployeeTask4'),
  salaryEmployee = document.getElementById('salaryEmployee'),
  solution4 = document.querySelector('.solution-4');

const countTotalSalary = (obj) => {
  let totalSalary = 0;

  for (const value of Object.values(obj)) {
    totalSalary += Number(value);
  }

  return totalSalary;
};
button4.addEventListener('click', (event) => {
  event.preventDefault();
  Tinycon.setBubble(4);

  employees[nameEmployee.value] = salaryEmployee.value;
  console.log(employees);
});

buttonSolve.addEventListener('click', () => {
  const totalSalary = countTotalSalary(employees);

  solution4.insertAdjacentHTML(
    'beforeend',
    `<p>Сумма зарплаты работников составляет: <span class="task4-span">${totalSalary}</span> кредитов.</p>`
  );
  document.querySelector('.task4-span').style.color = '#2ac940';
});
