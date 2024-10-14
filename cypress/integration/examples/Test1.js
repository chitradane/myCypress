//cypress - Spec 
//test suit
/// <reference types="Cypress" />

describe  ('My first test suit', function()
{
    //test cases
    it ('My Firsttest case',function ()
    {
      cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
       cy.get('.search-keyword').type('ca')
       cy.wait(2000)
       cy.get('.product:visible').should('have.length',4)

       cy.get('.products').as('productLocator')

       cy.get('@productLocator').find('.product').should('have.length',4)
       cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click().then(function()
      {
        console.log('sf ')
      })
      
       cy.get('.products').find('.product').each(($e1,index,$list)=> {
        const textVeg =$e1.find('h4.product-name').text()
        if (textVeg.includes('Cashews'))
        {
          cy.wrap($e1).find('button').click()
        }
       })
       cy.get('.brand').should('have.text','GREENKART')

      cy.get('.brand').then(function(logoelement)
      {
        cy.log(logoelement.text())
       })
      //cy.log(logo.text())




    })

} )


