/**
 * showSalary
 * @param {Array} users - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */
function showSalary(users, age) {
  // ваш код...
  let someUsers = users.filter(item => item.age <= age);
  let result = someUsers.map(item => item.name + ', ' + item.balance);
  let str = result.join('\n');
  
  return str;
  }
