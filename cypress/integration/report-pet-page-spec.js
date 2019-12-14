/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const url = 'https://missing-paws-api-staging.herokuapp.com/'
const email = 'moz@gmail.com'
const password = 'secret'

describe('Go to report a missing pet page', () => {
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
  it('Checks to see if the pet was added', () => {
    cy.get('.navbar-nav')
      .eq(0)
      .within(() => {
        cy.get('.nav-item')
          .eq(1)
          .should('contain', 'View Pets')
          .click()
      })
    cy.get('tbody')
      .find('tr')
      .should('have.length', 6)
  })
})
