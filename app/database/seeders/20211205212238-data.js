module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('users', [
      {
        nome: 'alex',
        email: 'alex@gmail.com',
      },
      {
        nome: 'rodrigo',
        email: 'rodrigao@hotmail.com',
      },
      {
        nome: 'breno',
        email: 'breno123@gmail.com',
      },
    ], {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('users', null, {});
  },
};
