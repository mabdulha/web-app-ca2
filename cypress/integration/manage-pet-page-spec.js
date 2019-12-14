/* eslint-disable no-undef */
const Url = 'http://localhost:8080/#/login'
const email = 'moz@gmail.com'
const password = 'secret'

describe('Login a user', () => {
  it('Shows display the title on page', () => {
    cy.visit(Url)
    cy.get('.vue-title').should('contain', 'Login')
  })
  it('Login a user', () => {
    cy.login(email, password)
  })
  it('Should find the manage pets nav item after logging in', () => {
    cy.get('.nav-item')
      .eq(0)
      .should('contain', 'Home').click()
    cy.wait(500)
    cy.get('.nav-item')
      .eq(2)
      .should('contain', 'Manage Pets').click()
  })
  it('Deletes a pet from table and reduces the size by one', () => {
    cy.get('tbody')
      .find('tr')
    cy.get('tbody')
      .find('tr')
      .eq(0)
      .find('td')
      .eq(7)
      .find('a')
      .click()
    cy.get('button')
      .get('.swal2-confirm')
      .click()
    cy.wait(100)
    cy.get('button')
      .get('.swal2-confirm')
      .click()
  })
})
