/* eslint-disable no-undef */
// const apiURL = 'https://missing-paws-api-staging.herokuapp.com/pets/'

describe('View Pets page', () => {
  it('Go to the pets view page', () => {
    cy.visit('/#/pets')
  })
  it('Display the title of page', () => {
    cy.get('.vue-title').should('contain', 'Pets List')
  })
  it('Display the pets in the table', () => {
    cy.get('tbody')
      .find('tr')
      .should('have.length', 10)
  })
  it('View the pet in row 2', () => {
    /* cy.get('.VueTables__heading')
      .contains('Views')
      .click() */
    cy.get('tbody')
      .find('tr')
      .eq(1)
      .find('td')
      .eq(7)
      .find('a')
      .click()
  })
  it('Should upview the pets view on row 2', () => {
    cy.get('tbody')
      .find('tr')
      .eq(1)
      .find('td')
      .eq(6)
      .contains('1')
  })
})
