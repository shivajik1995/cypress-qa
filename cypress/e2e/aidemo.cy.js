describe('AI Demo', () => {

  it('should fail', () => {

    cy.visit('https://practicetestautomation.com/practice-test-login/');

    cy.get('#fakeButton').click();

  });

});