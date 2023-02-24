
it('Testando home', () => {
    cy.visit('http://localhost:3000/');
    cy.get('input').should('be.empty');
    cy.get('button').should('be.disabled');
    cy.get('input').type('gabriel');
    cy.get('button').should('not.be.disabled');
    cy.get('button').click();
    cy.get('input').clear().type('jorginho')
    cy.contains('Pesquisar').click();
    cy.contains('Detalhes do usuário').click();
    cy.get('[alt="close icon"]').click();
    cy.get('[alt="close icon"]').should('not.exist');
})