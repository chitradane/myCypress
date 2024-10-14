//cypress - Spec 
//test suit
/// <reference types="Cypress" />

describe  ('My first test suit', function()
{
    //test cases
    it ('My first test case',function ()
    {
      cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
      
      //cy.get('div.mouse-hover-content').invoke('show')
      cy.contains('Top').click({force:true})
      cy.url().should('include','top')



      
    })

} )


