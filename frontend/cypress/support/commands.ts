// Custom commands for Cypress

// Example: Custom command to change language
Cypress.Commands.add('changeLanguage', (language: string) => {
  cy.get('[role="combobox"]').click();
  cy.contains(language).click();
});

// Example: Custom command to add product to cart
Cypress.Commands.add('addToCart', (productName: string) => {
  cy.contains(productName)
    .parent()
    .find('button')
    .contains('Add to cart')
    .click();
});

// Example: Custom command to check cart total
Cypress.Commands.add('checkCartTotal', (expectedTotal: number) => {
  cy.get('[data-testid="cart-total"]').should('contain', expectedTotal);
}); 