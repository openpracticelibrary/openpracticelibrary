describe("Test All Practice Pages are Working", () => {
  Cypress.env("files").forEach((file) => {
    var path = "/practice/" + file;
    it("Testing practice: " + file, () => {
      cy.visit(path);
    });
  });
});
