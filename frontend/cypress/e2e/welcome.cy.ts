describe('Welcome Page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('displays English welcome text by default', () => {
    cy.contains('Welcome to our store').should('be.visible');
    cy.contains('Your favorite online supermarket').should('be.visible');
  });

  it('changes language to Arabic', () => {
    // Open language selector
    cy.get('[role="combobox"]').click();
    
    // Select Arabic
    cy.contains('العربية').click();
    
    // Verify text changed to Arabic
    cy.contains('مرحباً بك في متجرنا').should('be.visible');
    cy.contains('متجرك المفضل على الإنترنت').should('be.visible');
  });

  it('navigates to home page', () => {
    cy.contains('Start').click();
    cy.url().should('include', '/home');
  });

  it('maintains language after navigation', () => {
    // Change to Arabic
    cy.get('[role="combobox"]').click();
    cy.contains('العربية').click();
    
    // Navigate to home
    cy.contains('ابدأ').click();
    
    // Verify language is still Arabic
    cy.contains('ماذا تبحث عن اليوم؟').should('be.visible');
  });
}); 