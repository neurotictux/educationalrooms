module.exports = {
  up: function (queryInterface, Sequelize) {

    return queryInterface.bulkInsert('Question', [{
      userId: 1, // id = 1
      description: 'teste',
      points: 8,
      category: 'categoria teste 1',
      shared: false,
      sync: '',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      userId: 2, // id = 2
      description: 'teste2',
      points: 3,
      category: 'categoria 1',
      shared: false,
      sync: '',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      userId: 1, // id = 3
      description: 'teste',
      points: 8,
      shared: true,
      category: 'categoria 1',
      sync: '',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      userId: 3, // id = 4
      description: 'teste',
      points: 8,
      shared: true,
      category: 'categoria 1',
      sync: '',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      userId: 2, // id = 5
      description: 'teste',
      points: 8,
      shared: true,
      category: 'categoria 1',
      sync: '',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      userId: 3, // id = 6
      description: 'teste',
      points: 8,
      shared: false,
      category: 'categoria 1',
      sync: '',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    // id = 7
    { userId: 5, description: 'teste', points: 8, shared: false, category: 'categoria 1', sync: '', createdAt: new Date(), updatedAt: new Date() },
    // id = 8
    { userId: 5, description: 'teste', points: 8, shared: false, category: 'categoria 1', sync: '', createdAt: new Date(), updatedAt: new Date() },
    // id = 9
    { userId: 5, description: 'teste', points: 8, shared: false, category: 'categoria 1', sync: '', createdAt: new Date(), updatedAt: new Date() },
    // id = 10
    { userId: 5, description: 'teste', points: 8, shared: false, category: 'categoria 1', sync: '', createdAt: new Date(), updatedAt: new Date() },
    // id = 11
    { userId: 5, description: 'teste', points: 8, shared: false, category: 'categoria 1', sync: '', createdAt: new Date(), updatedAt: new Date() },
    // id = 12
    { userId: 5, description: 'teste', points: 8, shared: false, category: 'categoria 1', sync: '', createdAt: new Date(), updatedAt: new Date() },
    // id = 13
    { userId: 5, description: 'teste', points: 8, shared: false, category: 'categoria 1', sync: 'R', updatedAt: new Date('6/26/2018'), createdAt: new Date() },
    // id = 14
    { userId: 5, description: 'teste', points: 8, shared: false, category: 'categoria 1', sync: 'U', updatedAt: new Date('6/26/2017'), createdAt: new Date() },
    // id = 14
    { userId: 5, description: 'teste', points: 8, shared: false, category: 'categoria 1', sync: 'U', updatedAt: new Date('6/26/2017'), createdAt: new Date() },
      // Questões corretas
      // {
      //   description: 'teste',
      //   category: 'Matemárica',
      //   answers: [
      //     { description: 'teste1', classification: 'A' },
      //     { description: 'teste2', classification: 'B' },
      //     { description: 'teste3', classification: 'C', correct: true },
      //     { description: 'teste4', classification: 'D' }
      //   ],
      //   points: 8
      // }, {
      //   description: 'teste',
      //   category: 'Matemárica',
      //   answers: [
      //     { description: 'teste1', classification: 'A' },
      //     { description: 'teste2', classification: 'B' },
      //     { description: 'teste3', classification: 'C', correct: true },
      //     { description: 'teste4', classification: 'D' }
      //   ],
      //   points: 8
      // }

    ])
  }
}