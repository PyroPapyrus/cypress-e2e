describe.only('criar nova conta e testar validação magento', () => {

    it('Deve acessar o site magento, se direcionar ao cadastro e efetivar ele', () => {
        cy.visit('http://magento2-demo.magebit.com')
        cy.title().should('eq', 'Magento 2 Commerce (Enterprise) Demo - Magebit')
        cy.contains('Create an Account').should('exist').first().click()
        cy.url().should('eq','https://magento2-demo.magebit.com/customer/account/create/')
      
        cy.get('#firstname').type('Eliane Gabriela')
        cy.get('#lastname').type('Cristiane Porto')
        cy.get('#email_address').type('eliane_crit@marithimaconstrutora.com.br')
        cy.get('#password').type('Y2W0sZOhEh')
        cy.get('#password-confirmation').type('Y2W0sZOhEh')
        
                //Submeter Forms
        cy.get('button[title="Create an Account"]').first().click()
        
                //Validando texto de sucesso
        cy.get('.message-success').should('contain', 'Thank you for registering with Main Website Store.')
    })
  })