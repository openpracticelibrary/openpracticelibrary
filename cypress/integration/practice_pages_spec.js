describe("Practice Page Test Suite", () => {
  Cypress.env("files").forEach((file) => {
    var path = "/practice/" + file;
    describe("Testing Page: " + file, () => {
      it("Should navigate to What Section", () => {
        cy.visit(path);
        cy.get('[data-testid="practice-nav-what"]').click();
        cy.get('[data-testid="practice-section-what"]').should("be.visible");
      });

      it("Should navigate to Why Section", () => {
        cy.get('[data-testid="practice-nav-why"]').click();
        cy.get('[data-testid="practice-section-why"]').should("be.visible");
      });

      it("Should navigate to How Section", () => {
        cy.get('[data-testid="practice-nav-how"]').click();
        cy.get('[data-testid="practice-section-how"]').should("be.visible");
      });

      it("Should navigate to Look Section", () => {
        cy.get('[data-testid="practice-nav-look"]').click();
        cy.get('[data-testid="practice-section-look"]').should("be.visible");
      });

      it("Should navigate to Links Section", () => {
        cy.get('[data-testid="practice-nav-links"]').click();
        cy.get('[data-testid="practice-section-links"]').should("be.visible");
      });

      it("Should navigate to Discuss Section", () => {
        cy.get('[data-testid="practice-nav-discuss"]').click();
        cy.get('[data-testid="practice-section-discuss"]').should("be.visible");
      });
    });
  });
});
