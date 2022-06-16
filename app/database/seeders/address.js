module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      'address',
      [
        {
          user_id: 1,
          cep: '81670-180',
          logradouro: 'Rua Cascavel',
          bairro: 'Boqueirão',
          localidade: 'Curitiba',
          uf: 'PR'
        },
        {
          user_id: 2,
          cep: '59042-505',
          logradouro: 'Praça Adonina Damasceno Pinto',
          bairro: 'Nordeste',
          localidade: 'Natal',
          uf: 'RN'
        },
        {
          user_id: 3,
          cep: '59042-110',
          logradouro: 'Rua Alfredo Edeltrudes',
          bairro: 'Nordeste',
          localidade: 'Natal',
          uf: 'RN'
        },
      ], {},
    );
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('address', null, {});
  },
};
