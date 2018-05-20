import { Given, When, Then } from 'cucumber'
import supertest from 'supertest'
import { expect } from 'chai'

import app from '../../../../src/server'

const request = supertest(app)
let question = null
let token = ''

Given('Dado que eu tenha atualizado uma questão', () => {
  question = {
    id: 1,
    description: 'teste',
    userId: 1,
    answers: [
      { description: 'teste' },
      { description: 'teste' },
      { description: 'teste', correct: true },
      { description: 'teste' }
    ],
    points: 8
  }

  return request
    .post('/token')
    .send({ email: 'questionmock1@mail.com', password: '123qwe' })
    .then((result) => {
      token = result.body.token
    })
})

When('Quando eu atualizar {string} atribuindo {string}', (caso, p) => {
  if (p) {
    const props = JSON.parse(p)
    for (let key in props)
      question[key] = props[key]
  }
  else
    question = null
})

Then('Então eu devo obter a mensagem {string} depois de tentar atualizar', (message) => {
  return request
    .put('/api/question')
    .set({ token: token })
    .send(question)
    .then((result) => {
      expect(result.body.message).to.eql(message)
    })
})