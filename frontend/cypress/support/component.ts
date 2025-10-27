// Import commands.js using ES2015 syntax:
import './commands';

// Import global styles
import '../../src/index.css';

declare global {
  namespace Cypress {
    interface Chainable {
      // Add custom commands here if needed
    }
  }
} 