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
    cy.get('input[type=email]')
      .type(email)
    cy.get('input[type=password]')
      .type(password)
    cy.get('button[type=submit]').click()
    /* cy.get('.typo__p')
      .should('include', 'Thanks for Loging in!')
    cy.contains('Welcome Moz Abdulha') */
  })
  // it('Log out a user', () => {
  //   cy.get('.navbar-nav')
  //     .eq(1)
  //     .within(() => {
  //       cy.get('.nav-item')
  //         .eq(2).click()
  //         .should('contain', 'Logout')
  //         .click()
  //       cy.url().should('contain', '/')
  //     })
  // })
})
