import { Given, When, Then } from 'cucumber'
import supertest from 'supertest'
import { assert } from 'chai'

import app from '../../../../src/server'

const request = supertest(app)
let token = null
let scores = null

Given('Dado que eu queira obter as pontuações', () => {
  return request
    .post('/api/token')
    .send({ email: 'test_room@mail.com', password: '123qwe' })
    .then((result) => {
      token = result.body.token
    })
})

When('Quando eu buscar as pontuações', () => {
  return request
    .get('/api/score')
    .set({ token: token })
    .then((result) => {
      scores = result.body
    })
})

Then('Então eu devo obter minhas pontuações e de minhas salas', () => {
  assert.isArray(scores.myRoomsScores, `myRoomsScores: ${JSON.stringify(scores.myRoomsScores)}`)
  assert.isArray(scores.roomsScores, `roomsScores: ${JSON.stringify(scores.roomsScores)}`)
  assert.isArray(scores.allUserScores, `allUserScores: ${JSON.stringify(scores.questionsRoomScores)}`)
})

Given('Dado que eu queira obter as pontuações para o gráfico', () => {
  return request
    .post('/api/token')
    .send({ email: 'test_room@mail.com', password: '123qwe' })
    .then((result) => {
      token = result.body.token
    })
})

When('Quando eu buscar as pontuações para o gráfico', () => {
  return request
    .get('/api/score-graph')
    .set({ token: token })
    .then((result) => {
      scores = result.body
    })
})

Then('Então eu devo obter as pontuações para o gráfico', () => {
  assert.isArray(scores, `scores: ${JSON.stringify(scores)}`)
})