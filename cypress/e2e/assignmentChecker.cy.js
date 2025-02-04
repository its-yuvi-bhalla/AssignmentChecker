const selectors = require('../fixtures/selectors.json');
const label = require('../fixtures/label.json');
const usernames = require('../../usernames/usernames.json');

/**
 * @description
 * This spec file contains test to verify if student assignment exists or not
 *
 * @file
 * cypress\e2e\test.cy.js
 *
 * @assertions
 * verify if assignment exists
 *
 * @prerequisites
 * Pre-Requisite data:
 * - student should have valid git repository name
 * - student name should be present in the json file
 */

describe('Check Assignments', () => {
  const week = 'week-3'

  beforeEach('Visiting the Website',()=>{
    // visiting website before each username Execution
    cy.visit(`https://webdev2.warsylewicz.ca/${week}/assignment`)
  })

  usernames.usernames.forEach((username) => {
    it(`Verify assignment exists for ${username}`, () => {
      // Ensure the username column is visible and scroll to it
      cy.get(selectors.usernameColumn).scrollIntoView().should('be.visible')

      // Input the username and check the assignment
      cy.get(selectors.usernameColumn).click().clear().type(username)
      cy.get(selectors.checkerButton).click()

      // Verify if the success message is displayed
      cy.get(selectors.checkerButton)
        .next()
        .should('contain.text', label.congratulations)
    })
  })

})
