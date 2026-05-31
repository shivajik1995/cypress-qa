describe('Practice Test Automation - Login Tests', () => {

  beforeEach(() => {
    cy.visit('https://practicetestautomation.com/practice-test-login/');
  });

  it('should login successfully with valid credentials', () => {
    cy.get('#username').type('student');
    cy.get('#password').type('Password123');
    cy.get('#submit').click();

    cy.url().should('include', '/logged-in-successfully/');
    cy.contains('Congratulations').should('be.visible');
    cy.contains('Log out').should('be.visible');
  });

  it('should show error for invalid username', () => {
    cy.get('#username').type('incorrectUser');
    cy.get('#password').type('Password123');
    cy.get('#submit').click();

    cy.get('#error')
      .should('be.visible')
      .and('contain.text', 'Your username is invalid!');
  });

  it('should show error for invalid password', () => {
    cy.get('#username').type('student');
    cy.get('#password').type('incorrectPassword');
    cy.get('#submit').click();

    cy.get('#error')
      .should('be.visible')
      .and('contain.text', 'Your password is invalid!');
  });

  it('should show error when username is empty', () => {
    cy.get('#password').type('Password123');
    cy.get('#submit').click();

    cy.get('#error').should('exist');
  });

  it('should show error when password is empty', () => {
    cy.get('#username').type('student');
    cy.get('#submit').click();

    cy.get('#error').should('exist');
  });

  it('should show validation when both fields are empty', () => {
    cy.get('#submit').click();

    cy.get('#error').should('exist');
  });

  it('should trim spaces around valid username and password', () => {
    cy.get('#username').type(' student ');
    cy.get('#password').type(' Password123 ');
    cy.get('#submit').click();

    cy.get('#error').should('be.visible');
  });

  it('should verify logout functionality', () => {
    cy.get('#username').type('student');
    cy.get('#password').type('Password123');
    cy.get('#submit').click();

    cy.contains('Log out').click();

    cy.url().should('include', '/practice-test-login/');
  });

});