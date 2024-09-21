describe('Suíte de testes para inserir/ adicionar produtos ao carrinho de compra.', () => {

    //função de apoio para otimização dos testes (função parametrizada)
    function adicionaItemCarrinho(categoriaProduto, cor, quantidade){
        cy.contains(categoriaProduto).should('exist').first().click()
        cy.get('.product-item-link').first().click()
        cy.get('#option-label-size-157-item-171').click()
        cy.get(cor).click()
        cy.get('#qty').clear().type(quantidade)
        cy.get('#product-addtocart-button').first().click()
    }

    it('Deve cadastrar uma nova conta e adicionar um produto ao carrinho com 6 itens.', () => {
        //chamando o comando customizado, de cadastrar nova conta
        cy.createAccount()
        adicionaItemCarrinho('Men', 6)
    })

    it.only('Deve cadastrar uma nova conta e adicionar um produto ao carrinho com 10 itens.', () => {
        cy.createAccount()
        adicionaItemCarrinho('Women','#option-label-color-93-item-50', 10)
    })

    it('Deve cadastrar a conta, adicionar produto ao carrinho e verificar produto no carrinho.', ()=>{
        cy.createAccount()
        adicionaItemCarrinho('Women', 10)

        //abrir modal do carrinho
        cy.get('.showcart').first().click()

        //verifica item no carrinho
        cy.get('.product-item-name').should('contain', 'Radiant Tee')
    })
})