import { faker } from "@faker-js/faker"

describe('Suíte de testes para inserir/adicionar produtos ao carrinho de compra',()=>{
    
      //gerar dados randomicos
      const primeiroNome = faker.person.firstName()
      const sobrenome = faker.person.lastName()
      const email = faker.internet.email()
      const senha = faker.internet.password()
    
    beforeEach(()=>{
        cy.visit('http://magento2-demo.magebit.com')
    })
    


    it('Deve acessar um determinado produto na página, selecionar as opções disponíveis desse produto.', ()=>{
        cy.contains('Create an Account').first().click()
        cy.url().should('eq','https://magento2-demo.magebit.com/customer/account/create/')

        //inserir valores nos campos
        cy.get('#firstname').type(primeiroNome)
        cy.get('#lastname').type(sobrenome)
        cy.get('#email_address').type(email)
        cy.get('#password').type(senha)
        cy.get('#password-confirmation').type(senha)

        //clicar em criar conta
        cy.get('button[title="Create an Account"]').first().click()

        //validar mensagem de sucesso
        cy.get('.message-success').should('contain', 'Thank you for registering with Main Website Store.')

        //deve acessar categoria women (mulher)
        cy.contains('Women').should('exist').first().click()
        cy.get('.product-item-link').first().click()

        //selecionar tamahno
        cy.get('#option-label-size-157-item-171').click()

        //selecionar cor
        cy.get('#option-label-color-93-item-50').click()

        //selecionar quantidade
        cy.get('#qty').clear().type('5')

        //adicionar produto ao carrinho
        cy.get('#product-addtocart-button').first().click();
    })
})