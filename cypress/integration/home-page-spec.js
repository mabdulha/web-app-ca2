/* eslint-disable no-undef */
const apiUrl = 'http://localhost:8080/'
describe('Home Page', () => {
  beforeEach(() => {
    cy.visit(apiUrl)
  })
  it('Shows headers on page', () => {
    cy.get('.welcome-user').should('contain', 'Welcome')
    cy.get('.vue-title').should('contain', 'lose')
  })

  describe('Navigation bar', () => {
    it('Shows the required links', () => {
      cy.get('.navbar-nav')
        .eq(0)
        .within(() => {
          cy.get('.nav-item')
            .eq(0)
            .should('contain', 'Home')
          cy.get('.nav-item')
            .eq(1)
            .should('contain', 'View Pets')
          cy.get('.nav-item')
            .eq(2)
            .should('contain', 'Map')
        })
      cy.get('.navbar-nav')
        .eq(1)
        .within(() => {
          cy.get('.nav-item')
            .eq(0)
            .should('contain', 'About Us')
          cy.get('.nav-item')
            .eq(1)
            .should('contain', 'Contact Us')
          cy.get('.nav-item')
            .eq(2)
            .should('contain', 'Login')
          cy.get('.nav-item')
            .eq(3)
            .should('contain', 'Register')
        })
    })
    it('Redirects to the page when nav link is clicked', () => {
      cy.get('.navbar-nav')
        .eq(0)
        .within(() => {
          cy.get('.nav-item')
            .eq(0).click()
          cy.url().should('include', '/')
          cy.get('.nav-item')
            .eq(1).click()
          cy.url().should('include', '/pets')
          cy.get('.nav-item')
            .eq(2).click()
          cy.url().should('include', '/map')
        })
      cy.get('.navbar-nav')
        .eq(1)
        .within(() => {
          cy.get('.nav-item')
            .eq(0).click()
          cy.url().should('include', '/about')
          cy.get('.nav-item')
            .eq(1).click()
          cy.url().should('include', '/contact')
          cy.get('.nav-item')
            .eq(2).click()
          cy.url().should('include', '/login')
          cy.get('.nav-item')
            .eq(3).click()
          cy.url().should('include', '/register')
        })
    })
    it('Home page should display a footer', () => {
      cy.get('.footer')
        .should('contain', 'Copyright © 2019: Missing Paws')
        .and('have.css', 'background-color')
    })
  })
})
