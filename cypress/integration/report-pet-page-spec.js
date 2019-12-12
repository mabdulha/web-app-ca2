// /* eslint-disable no-unused-vars */
// /* eslint-disable no-undef */
// const apiUrl = 'https://missing-paws-api-staging.herokuapp.com/'

// describe('Report missing pet page', () => {
//   beforeEach(() => {
//     cy.request(apiUrl)
//       .its('body')
//       .then(pets => {
//         pets.forEach(element => {
//           cy.request('DELETE', `${apiUrl}${element._id}`)
//         })
//       })
//     cy.fixture('pets').then(pets => {
//       let [p1, p2, p3, p4, ...rest] = pets
//       let four = [p1, p2, p3, p4]
//       four.forEach(pet => {
//         cy.request('POST', apiUrl, pet)
//       })
//     })
//     cy.visit('/')
//     cy.get('navbar-nav')
//       .eq(1)
//       .find('.nav-item')
//       .eq(2)
//       .click()
//     it('Shows display the title on page', () => {
//       cy.get('.vue-title').should('contain', 'Login')
//     })
//     it('Login a user', () => {
//       cy.get('input[type=email]')
//         .type(email)
//       cy.get('input[type=password]')
//         .type(password)
//       cy.get('button[type=submit]').click()
//     })
//     describe('Report a missing pet', () => {
//       describe('Go to the report page', () => {
//         cy.request('/add')
//         it('allows a pet to be reported', () => {
//           cy.get('input[name=name]').type('Henry')
//           cy.get('name=type').select('Cat')
//           cy.get('name=species').type('Serbian')
//           cy.get('name=gender').select('Male')
//           cy.get('name=colour').type('White')
//           cy.get('name=size').select(23)
//           cy.get('name=age').select('Less than 5 years')
//           cy.get('name=lastseenaddress').type('Green lane, Dublin')
//           cy.contains('Thanks').should('not.exist')
//           cy.get('button[type=submit]').click()
//           cy.contains('Thanks').should('exist')
//         })
//         after(() => {
//           cy.wait(100)
//           cy.get('.navbar-nav')
//             .eq(0)
//             .find('.nav-item')
//             .eq(1)
//             .click()
//           cy.get('tbody')
//             .find('tr')
//             .should('have.length', 5)
//         })
//       })
//     })
//   })
// })
