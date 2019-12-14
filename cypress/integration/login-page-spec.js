/* eslint-disable no-undef */
const apiUrl = 'http://localhost:8080/#/login'

describe('Login Page', () => {
  const email = 'moz@gmail.com'
  const password = 'secret'
  before(() => {
    cy.visit(apiUrl)
  })
  it('Shows display the title on page', () => {
    cy.get('.vue-title').should('contain', 'Login')
  })
  it('Login a user', () => {
    cy.login(email, password)
  })
  it('Contain Logout in the nav item to confirm owner has logged in', () => {
    cy.get('.navbar-nav')
      .eq(1)
      .within(() => {
        cy.get('.nav-item')
          .eq(2)
          .should('contain', 'Logout')
      })
  })
})
