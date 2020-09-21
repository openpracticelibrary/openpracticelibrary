describe("Full Use Case of Selecting Event Storming", () => {
  it("Search for Event Storming and Navigate to Practice", () => {
    cy.visit("/");
    cy.get('[data-testid="searchTextField"]')
      .get("input")
      .type("Event Storming");
    cy.get('[data-testid="practicecard"]').click();
    cy.url().should("include", "/practice/event-storming");
  });
  it("Verify Title is Event Storming", () => {
    cy.get('[data-testid="title"]').contains("Event Storming");
  });
});
