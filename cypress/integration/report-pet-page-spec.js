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
    cy.contains('Thanks').should('not.exist')
    cy.get('button[type=submit]').click()
    cy.contains('Thanks').should('exist')
  })
  after(() => {
    cy.wait(100)
    cy.get('.navbar-nav')
      .eq(0)
      .find('.nav-item')
      .eq(2)
      .click()
    cy.get('.VuePagination')
      .find('li')
      .contains(2)
      .click()
    cy.get('tbody')
      .find('tr')
      .should('have.length', 6)
    cy.get('tbody')
      .find('tr')
      .eq(2)
      .find('td')
      .eq(7)
      .find('a')
      .click()
    cy.get('button')
      .get('.swal2-confirm')
      .click()
    cy.wait(700)
    cy.get('button')
      .get('.swal2-confirm')
      .click()
    cy.get('tbody')
      .find('tr')
      .should('have.length', 5)
  })
})
