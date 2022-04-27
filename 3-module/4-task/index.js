function showSalary(users, age) {
  let balanceAge = [];
  users.forEach(function (item) {
    if (item.age <= age) {
      balanceAge.push(`${item.name}, ${item.balance}`);
    }
  });

  return balanceAge.join('\n');
}
