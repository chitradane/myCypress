//cypress - Spec 
//test suit
/// <reference types="Cypress" />

describe  ('My first test suit', function()
{
    //test cases
    it ('My first test case',function ()
    {
      cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

      //Check boxes
      cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')
      cy.get('#checkBoxOption1').uncheck().should('not.be.checked') 
      cy.get('input[type="checkbox"]').check(['option2','option3'])
      
      //Static Dropdown
      cy.get('select').select('option2').should('have.value','option2')

      //Dynamic dropdown
       cy.get('#autocomplete').type('ind') 
       cy.get('.ui-menu-item div').each(($e1,index,$list)=> {
        if($e1.text()==="India")
        {
          $e1.click()
        }
       })
       cy.get('#autocomplete').should('have.value','India')


       //Hide-show
       cy.get('#displayed-text').should('be.visible')
       cy.get('#hide-textbox').click()
       cy.get('#displayed-text').should('not.be.visible')
       cy.get('#show-textbox').click()
       cy.get('#displayed-text').should('be.visible')

       //Radio button
       cy.get('[value="radio2"]').check().should('be.checked')



    })

} )


