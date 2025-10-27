describe('Welcome Page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should display welcome page in Arabic by default', () => {
    cy.contains('مرحباً بك في متجرنا').should('be.visible');
    cy.contains('متجرك المفضل على الإنترنت').should('be.visible');
  });

  it('should change language to English', () => {
    // Open language selector
    cy.get('[role="combobox"]').click();
    
    // Select English
    cy.contains('English').click();
    
    // Verify text changed to English
    cy.contains('Welcome to our store').should('be.visible');
    cy.contains('Your favorite online supermarket').should('be.visible');
  });

  it('should navigate to home page when clicking start button', () => {
    cy.contains('ابدأ').click();
    cy.url().should('include', '/home');
  });

  it('should maintain selected language after navigation', () => {
    // Change to English
    cy.get('[role="combobox"]').click();
    cy.contains('English').click();
    
    // Navigate to home
    cy.contains('Start').click();
    
    // Verify language is still English
    cy.contains('What are you looking for today?').should('be.visible');
  });
}); 