describe('My First Test', () => {
    it('Verify Discovery Tag Navigates to /tags/discovery', () => {
      cy.visit("/");
      cy.get('[data-testid="filter_tag_Discovery"]').click();
      cy.url().should('include', '/tags/discovery')
    })
  })