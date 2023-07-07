describe('Newsletter Subscribe Form', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('allows users to subscribe to the email list', () => {
    // Waiting so it's easier to see the test running. Can be removed safely
    cy.wait(500)

    cy.getByData('email-input').type('example@gmail.com')
    cy.getByData('submit-button').click()
    cy.getByData('success-message').should('exist').contains('example@gmail.com')
  })

  it('does NOT allow an invalid email address', () => {
    // Waiting so it's easier to see the test running. Can be removed safely
    cy.wait(500)

    cy.getByData('email-input').type('not/valid#moc$')
    cy.getByData('submit-button').click()
    cy.getByData('success-message').should('not.exist')
  })

  it('does NOT allow an email address that is already subscribed', () => {
    // Waiting so it's easier to see the test running. Can be removed safely
    cy.wait(500)

    cy.getByData('email-input').type('john@example.com')
    cy.getByData('submit-button').click()
    cy.getByData('server-error-message').should('exist').contains('john@example.com')
  })
})