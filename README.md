# Cypress QA Project

This is a Cypress automation testing project for QA testing.

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn

## Installation

1. Clone the repository:
```bash
git clone https://github.com/shivajik1995/cypress-qa.git
cd cypress-qa
```

2. Install dependencies:
```bash
npm install
```

## Running Tests

### Open Cypress Interactive Mode
```bash
npm run cypress:open
```

### Run Tests Headless
```bash
npm run cypress:run
```

### Run Tests in Headed Mode
```bash
npm run cypress:run:headed
```

## Project Structure

```
cypress-qa/
├── cypress/
│   ├── e2e/                 # Test files (.cy.js)
│   ├── support/
│   │   ├── commands.js      # Custom commands
│   │   └── e2e.js           # Global support file
│   └── fixtures/            # Test data files
├── cypress.config.js        # Cypress configuration
├── package.json
├── README.md
└── .gitignore
```

## Configuration

Edit `cypress.config.js` to customize:
- Base URL
- Viewport size
- Browser settings
- Timeouts
- Other Cypress options

## Writing Tests

Tests are located in `cypress/e2e/` directory. Each test file should end with `.cy.js`.

Example test structure:
```javascript
describe('Test Suite Name', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should perform an action', () => {
    cy.get('selector').click()
    cy.get('result').should('contain', 'text')
  })
})
```

## Best Practices

- Use descriptive test names
- Keep tests focused and independent
- Use page objects for complex scenarios
- Add custom commands in `support/commands.js`
- Use fixtures for test data

## Documentation

- [Cypress Documentation](https://docs.cypress.io)
- [Best Practices](https://docs.cypress.io/guides/references/best-practices)

## License

MIT
