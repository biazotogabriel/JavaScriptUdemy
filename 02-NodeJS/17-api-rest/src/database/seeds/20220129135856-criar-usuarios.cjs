const bcryptjs = require('bcryptjs')

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert(
    'users',
    [
      {
        nome: 'Rafael',
        email: 'rafa@gmaial.com',
        password_hash: await bcryptjs.hash('123456', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'Kitila',
        email: 'kity@gmaial.com',
        password_hash: await bcryptjs.hash('123456', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'Kamila',
        email: 'kamila@gmaial.com',
        password_hash: await bcryptjs.hash('123456', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
    ],
    {},
  ),

  down: () => {}
};
