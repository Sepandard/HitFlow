describe('AppComponent', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should display the router outlet',  () => {
    cy.get('router-outlet').should('exist');
  });
}); 