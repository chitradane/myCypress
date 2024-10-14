describe('My First real Test', () => {
    it('Visits the website', () => {
      cy.visit('https://suitsupply.com/en-nl/')
      cy.get('#onetrust-accept-btn-handler').click()
      cy.get('[data-testid="link_quicklinks_shirts_shop"]').click()
    })
  })