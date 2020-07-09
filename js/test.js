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
