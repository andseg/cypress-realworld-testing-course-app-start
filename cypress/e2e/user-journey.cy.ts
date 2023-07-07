describe('User journey', () => {
  
// 1. A user lands on the home page and finds one of the courses.
// 2. They click on the “Get started” button and are taken to the course landing page.
// 3. They click on the “Start Course” button and are taken to the first lesson of that course.
// 4. They read the lesson and complete the quiz at the bottom.
// 5. After answering the quiz correctly, they click on the “Next Lesson” button and are taken to the next lesson.

  it('A user can find a course on the home page and complete the courses lessons', () => {
    // 1. A user lands on the home page and finds one of the courses.
    cy.visit('http://localhost:3000')
    // Waiting so it's easier to see the test running. Can be removed safely
    cy.wait(500)

    // 2. They click on the “Get started” button and are taken to the course landing page.
    cy.getByData("course-0").find("a").contains('Get started').click()
    cy.location("pathname").should("equal", "/testing-your-first-application")

    // 3. They click on the “Start Course” button and are taken to the first lesson of that course.
    cy.getByData('next-lesson-button').click()
    cy.location('pathname').should('eq', '/testing-your-first-application/app-install-and-overview')

    // 4. They read the lesson and complete the quiz at the bottom.
    cy.getByData('challenge-answer-0').click()

    // 5. After answering the quiz correctly, they click on the “Next Lesson” button and are taken to the next lesson.
    cy.getByData('next-lesson-button').should('exist').click()
    cy.location('pathname').should('eq', '/testing-your-first-application/installing-cypress-and-writing-our-first-test')

    // Next lesson
    cy.getByData('challenge-answer-0').click()
    cy.getByData('next-lesson-button').should('exist').click()
    cy.location('pathname').should('eq','/testing-your-first-application/setting-up-data-before-each-test')

    // Next lesson
    cy.getByData('challenge-answer-0').click()
    cy.getByData('next-lesson-button').should('exist').click()

    // Home
    cy.location('pathname').should('eq','/')

  })
})