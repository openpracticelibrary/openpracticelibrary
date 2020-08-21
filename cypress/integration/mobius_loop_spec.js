describe("Test All Mobius Loop Filters Work as Expected", () => {
  it("Verify Discovery Tag", () => {
    cy.visit("/");
    cy.get('[data-testid="Discovery"]').click();
    cy.url().should("include", "/tags/discovery");
  });
  it("Verify Options Tag", () => {
    cy.visit("/");
    cy.get('[data-testid="Options"]').click();
    cy.url().should("include", "/tags/options");
  });
  it("Verify Delivery Tag", () => {
    cy.visit("/");
    cy.get('[data-testid="Delivery"]').click();
    cy.url().should("include", "/tags/delivery");
  });
  it("Verify Foundation Tag", () => {
    cy.visit("/");
    cy.get('[data-testid="Foundation"]').click();
    cy.url().should("include", "/tags/foundation");
  });
});
