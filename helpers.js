const getUserByEmail = function(email, database) {
  // lookup magic...
  // export and require
  for (const user in database) {
    if (database[user].email === email) {
      return user;
    }
  }
};

module.exports = { getUserByEmail };
