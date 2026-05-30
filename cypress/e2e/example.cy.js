describe('Example Test Suite', () => {
  beforeEach(() => {
    // Visit your application
    cy.visit('/')
  })

  it('should load the homepage', () => {
    // Basic test - checks if page title contains expected text
    cy.title().should('include', 'Example')
  })

  it('should have a visible element', () => {
    // Example: Check if an element is visible
    cy.get('body').should('be.visible')
  })

  it('should perform basic interactions', () => {
    // Example test with basic interactions
    cy.get('input[type="text"]').should('exist')
    cy.get('button').should('exist')
  })
})

describe('Sample Login Tests', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should display login form', () => {
    cy.get('input[name="username"]').should('be.visible')
    cy.get('input[name="password"]').should('be.visible')
    cy.get('button[type="submit"]').should('be.visible')
  })

  it('should have proper form attributes', () => {
    cy.get('input[name="username"]').should('have.attr', 'placeholder')
    cy.get('input[name="password"]').should('have.attr', 'type', 'password')
  })
})
