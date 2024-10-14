//cypress - Spec 
//test suit
/// <reference types="Cypress" />

describe  ('My first test suit', function()
{
    //test cases
    it ('My first test case',function ()
    {
      cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
      cy.get('#alertbtn').click()
      cy.get('[value="Confirm"]').click() 
      //window.alert
      cy.on('window:alert',(str)=>
      {
        expect(str).to.equal('Hello , share this practice page and share your knowledge')
      })
      
      cy.on('window:confirm',(str)=>
      {
        expect(str).to.equal('Hello , Are you sure you want to confirm?')
      })
    })

} )


