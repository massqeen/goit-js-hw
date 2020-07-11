// решение задачи 3-3 без инициализации maxTasks=0
const object = { a: 1, b: 2, c: 3 };
const findBestEmployee = (obj) => {
  let maxTasks, bestEmployee;
  maxTasks = Math.max(...Object.values(obj));
  for (const key in obj) {
    if (obj[key] === maxTasks) {
      bestEmployee = key;
      break;
    }
  }

  return `${bestEmployee}: ${maxTasks}`;
};
console.log(findBestEmployee(object));

// рекурсивная функция
function pow(x, n) {
  if (n === 1) {
    return x;
  }
  let result = x * pow(x, n - 1);
  return result;
}

console.log(pow(2, 3));
let a;
