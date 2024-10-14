/// <reference types="Cypress" />
/// <reference types="Cypress-iframe" />
import 'cypress-iframe'
 
describe('Frame test', function() 
{
 
it('Demo example',function() {
 
cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
cy.frameLoaded("#courses-iframe")
cy.iframe().find("a[href*='mentorship']").eq(0).click()
Cypress.config('defaultCommandTimeout',10000)
cy.iframe().find("h1[class*='pricing-title']").should('have.length',2)
})
 
 
})
