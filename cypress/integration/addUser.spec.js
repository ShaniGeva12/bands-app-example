describe('add band', () => {
  beforeEach(() => {
    cy.request('GET', 'http://127.0.0.1:8080/api/auth/yaniv/Welcome1!')
      .its('body')
      .as('currentUser')
  });
  it('ahould be open', () => {
    cy.visit('http://localhost:5000/add-band')
  });
});
