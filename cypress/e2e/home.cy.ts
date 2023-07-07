/// <reference types="Cypress" />

import { it } from "mocha"

describe('home page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')

    // Waiting so it's easier to see the test running. Can be removed safely
    cy.wait(500)
  })

  //context groups related tests together making our spec file easier to read
  context('Hero section', () => {
    it('the h1 contains the correct text', () => {
      // This is done in the beforeEach hook
      // cy.visit('http://localhost:3000')
  
      // More Verbose way of getting data-test
      // cy.get('[data-test="hero-heading"]').contains(
      //   'Testing Next.js Applications with Cypress'
      //   )
  
      // Less Verbose way of getting data-test
      cy.getByData('hero-heading').contains(
        'Testing Next.js Applications with Cypress'
      )
  
    })
  
    it('the features on the homepage are correct', () => {
      // This is done in the beforeEach hook
      // cy.visit('http://localhost:3000')
  
      cy.get('dt').eq(0).contains('4 Courses')
      cy.get('dt').eq(1).contains('25+ Lessons')
      cy.get('dt').eq(2).contains('Free and Open Source')
    })
  })

  context('Courses section', () => {
    it('Course: Testing Your First Next.js Application', () => {
      cy.getByData('course-0').find('a').contains('Get started').click()
      cy.location('pathname').should('equal', '/testing-your-first-application')
    })

    it('Course: Testing Foundations', () => {
      cy.getByData('course-1').find('a').contains('Get started').click()
      cy.location('pathname').should('equal', '/testing-foundations')
    })

    it('Course: Cypress Fundamentals', () => {
      cy.getByData('course-2').find('a').contains('Get started').click()
      cy.location('pathname').should('equal', '/cypress-fundamentals')
    })
  })
  
})