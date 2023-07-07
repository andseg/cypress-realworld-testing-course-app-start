describe('Newsletter Subscribe Form', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')

    // Waiting so it's easier to see the test running. Can be removed safely
    cy.wait(500)
  })

  it('Allows users to subscribe to the email list', () => {
    cy.getByData('email-input').type('example@gmail.com')
    cy.getByData('submit-button').click()
    cy.getByData('success-message').should('exist').contains('example@gmail.com')
  })

  it('Does NOT allow an invalid email address', () => {
    cy.getByData('email-input').type('not/valid#moc$')
    cy.getByData('submit-button').click()
    cy.getByData('success-message').should('not.exist')
  })

  it('Does NOT allow an email address that is already subscribed', () => {
    cy.getByData('email-input').type('john@example.com')
    cy.getByData('submit-button').click()
    cy.getByData('server-error-message').should('exist').contains('john@example.com')
  })
})