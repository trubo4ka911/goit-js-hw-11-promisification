const users = [
  { name: "Mango", active: true },
  { name: "Poly", active: false },
  { name: "Ajax", active: true },
  { name: "Lux", active: false },
];
const promises = users.map(toggleUserState);

function toggleUserState(userName) {
  const updatedUsers = users.map((user) =>
    user.name === userName ? { ...user, active: !user.active } : user
  );
  return new Promise((resolve) => {
    resolve(updatedUsers);
  });
}

// const toggleUserState = (userName) => {
//   return new Promise((resolve, reject) => {
//     user.name === userName
//       ? resolve({ ...user, active: !user.active })
//       : reject(user);
//   });
// };
// const updatedUsers = users.map((user) => toggleUserState);

// const toggleUserState = (allUsers, userName, callback) => {
//   const updatedUsers = allUsers.map((user) =>
//     user.name === userName ? { ...user, active: !user.active } : user
//   );

//   callback(updatedUsers);
// };

const logger = (updatedUsers) => console.table(updatedUsers);

/*
 * Сейчас работает так
 */
// toggleUserState(users, "Mango", logger);
// toggleUserState(users, "Lux", logger);

/*
 * Должно работать так
 */
toggleUserState(users, "Mango").then(logger);
toggleUserState(users, "Lux").then(logger);
