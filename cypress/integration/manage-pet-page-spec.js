/* eslint-disable no-undef */
const apiUrl = 'https://missing-paws-api-staging.herokuapp.com/pets/'
const email = 'moz@gmail.com'
const password = 'secret'

describe('Manage Pets page', () => {
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
    cy.request('http://localhost:8080')
    cy.login(email, password)
    cy.wait(500)
    cy.visit('/')
    cy.get('.navbar-nav')
      .eq(0)
      .within(() => {
        cy.get('.nav-item')
          .eq(2)
          .should('contain', 'Manage Pets')
          .click()
      })
  })
  it('Allows a pet to be upviewed', () => {
    cy.get('tbody')
      .find('tr')
      .should('have.length', 3) // only loads 3 from fixures because of the owner id because an owner can only manage his/her own pets
    cy.get('tbody')
      .find('tr')
      .eq(0)
      .find('a')
      .eq(0)
      .click()
    cy.get('tbody')
      .find('tr')
      .eq(0)
      .find('td')
      .eq(5)
      .should('contain', 1)
  })
  it('Delete a pet', () => {
    cy.wait(200)
    cy.get('tbody')
      .find('tr')
      .eq(1)
      .find('a')
      .eq(1)
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
      .should('have.length', 2)
  })
  it('Edits a pet', () => {
    cy.wait(200)
    cy.get('tbody')
      .find('tr')
      .eq(2)
      .find('a')
      .eq(2)
      .click()
    cy.get('input[name=name]').clear().type('Harry')
    cy.get('select[name=type]').select('Turtle')
    cy.get('input[name=species]').clear().type('Black Sea Turtle')
    cy.get('button[type=submit]').click()
    cy.get('tbody')
      .find('tr')
      .should('contain', 'Harry')
      .and('contain', 'Black Sea Turtle')
  })
})
