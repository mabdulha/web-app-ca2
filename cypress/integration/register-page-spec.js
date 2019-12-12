/* eslint-disable no-undef */
import Chance from 'chance'

const chance = new Chance()
// const apiUrl = 'https://missing-paws-web-app.herokuapp.com/'
const clientUrl = 'http://localhost:8080/#/register'

describe('Register Page', () => {
  const firstname = chance.name()
  const fname = firstname.split(' ', 1)
  const lastname = chance.name()
  const lname = lastname.split(' ', 1)
  const phonenum = chance.phone()
  const email = chance.email()
  const password = 'secretpass'

  beforeEach(() => {
    cy.visit(clientUrl)
  })
  it('Shows display the title on page', () => {
    cy.get('.vue-title').should('contain', 'Register')
  })
  /* it.only('Promps user if there are empty fields', () => {
    cy.get('button[type=submit]')
      .click()
    cy.wait(500)
    cy.contains('Please fill in this field.')
  }) */
  it('Register a new user (unsucessfully - passwords do not match)', () => {
    cy.get('input[name=firstname]')
      .type(fname.toString())
    cy.get('input[name=lastname]')
      .type(lname.toString())
    cy.get('input[name=phonenum]')
      .type(phonenum)
    cy.get('input[name=email]')
      .type(email)
    cy.get('input[name=password]')
      .type(password)
    cy.get('input[name=passwordconfirm]')
      .type(lname.toString())
    cy.get('button[type=submit]')
      .click()
    cy.get('#swal2-title')
      .should('contain', 'Please Ensure the passwords both match')
  })
  it('Register a new user (sucessfully)', () => {
    cy.get('input[name=firstname]')
      .type(fname.toString())
    cy.get('input[name=lastname]')
      .type(lname.toString())
    cy.get('input[name=phonenum]')
      .type(phonenum)
    cy.get('input[name=email]')
      .type(email)
    cy.get('input[name=password]')
      .type(password)
    cy.get('input[name=passwordconfirm]')
      .type(password)
    cy.get('button[type=submit]')
      .click()
    cy.wait(200)
    cy.contains('Welcome')
  })
})
