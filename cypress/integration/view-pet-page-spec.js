/* eslint-disable no-undef */
const apiUrl = 'https://missing-paws-api-staging.herokuapp.com/pets/'

describe('View Pets page', () => {
  beforeEach(() => {
    cy.request(apiUrl)
      .its('body')
      .then((pets) => {
        pets.forEach(element => {
          cy.request('DELETE', apiUrl + element._id)
        })
      })
    cy.fixture('pets')
      .then((pets) => {
        pets.forEach((pet) => {
          cy.request('POST', apiUrl, pet)
        })
      })
    cy.visit('http://localhost:8080')
    cy.get('.navbar-nav')
      .eq(0)
      .within(() => {
        cy.get('.nav-item')
          .eq(1)
          .should('contain', 'View Pets')
          .click()
      })
  })
  it('Allows a pet to be upviewed on row 4', () => {
    cy.get('tbody')
      .find('tr')
      .should('have.length', 7) // should load all 6 from all the owners pets
    cy.get('tbody')
      .find('tr')
      .eq(3)
      .find('a')
      .eq(0)
      .click()
    cy.get('tbody')
      .find('tr')
      .eq(3)
      .find('td')
      .eq(6)
      .should('contain', 1)
  })
})
