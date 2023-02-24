
describe('Testando Home', () => {
    beforeEach(()=> {
        cy.visit('http://localhost:3000/');
    });

    it('botão de pesquisa deve se manter desabilitado caso o input esteja vazio', () => {
        cy.get('input').should('be.empty');
        cy.get('button').should('be.disabled');
        cy.get('input').type('gabriel');
        cy.get('button').should('not.be.disabled');
        
    });

    it('após a consulta da api os modais de usuario devem estar disponiveis', () => {
        cy.get('input').type('jorginho');
        cy.contains('Pesquisar').click();
        cy.contains('Detalhes do usuário').click();
        cy.get('[alt="close icon"]').click();
        cy.get('[alt="close icon"]').should('not.exist');
        cy.contains('<').should('be.disabled');
        cy.contains('>').click();
        cy.contains('<').should('not.be.disabled');
    });

    it('botões de paginação deve ser desabilitados de acordo com o index da página', () => {
        cy.get('input').type('jorginho');
        cy.contains('Pesquisar').click();
        cy.contains('<').should('be.disabled');
        cy.contains('>').click();
        cy.contains('<').should('not.be.disabled');
    });
})
