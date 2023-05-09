const connection = require('./connections');

const getAllUsers = async () => {
  return new Promise((resolve) => {
    connection.query('SELECT * FROM users', (err, rows) => {
      if (err) {
        resolve({
          status: 'error',
          error: true,
          message: err.sqlMessage
        });
      } else {
        resolve({
          status: 'success',
          error: false,
          data: rows
        });
      }
    });
  })
}

module.exports = {
  getAllUsers,
}