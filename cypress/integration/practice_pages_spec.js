describe("Test All Practice Pages are Working", () => {
  Cypress.env("files").forEach((file) => {
    it("Testing practice: " + file, () => {
      var path = "/practice/" + file;
      cy.visit(path);
    });
  });
});
