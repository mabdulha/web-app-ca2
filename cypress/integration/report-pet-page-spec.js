/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const url = 'https://missing-paws-api-staging.herokuapp.com/'
const loginUrl = 'http://localhost:8080/#/login'
const email = 'moz@gmail.com'
const password = 'secret'

describe('Go to report a missing pet page', () => {
  before(() => {
    cy.visit(loginUrl)
  })
  it('Login a user', () => {
    cy.login(email, password)
    cy.visit('http://localhost:8080/#/add')
  })
  it('allows a pet to be reported', () => {
    cy.get('input[name=name]').type('Henry')
    cy.get('select[name=type]').select('Cat')
    cy.get('input[name=species]').type('Serbian')
    cy.get('select[name=gender]').select('Male')
    cy.get('input[name=colour]').type('White')
    cy.get('input[name=size]').type(23)
    cy.get('select[name=age]').select('Less than 5 years')
    cy.get('input[name=lastseenaddress]').type('Green lane, Dublin')
    cy.get('button[type=submit]').click()
  })
})
