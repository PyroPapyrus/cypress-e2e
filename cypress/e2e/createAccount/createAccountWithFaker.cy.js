import { faker } from "@faker-js/faker"

describe('Suíte de testes Magento - com uso da biblioteca faker', ()=>{

     //gerar dados randomicos
     const primeiroNome = faker.person.firstName()
     const sobrenome = faker.person.lastName()
     const email = faker.internet.email()
     const senha = faker.internet.password()

    beforeEach(()=>{
        cy.visit('http://magento2-demo.magebit.com')
    })


    it('Quando usuário cadastrar um novo registro com os campos preenchidos corretamente, o registro deve ser efetuado corretamente', ()=>{
        
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
    })
    
    it('Validando duplicidade de usuário. Deve retornar uma mensagem de erro.', () => {
        cy.contains('Create an Account').first().click()
        cy.url().should('eq', 'https://magento2-demo.magebit.com/customer/account/create/')

        //Inserir valores nos campos
        cy.get('#firstname').type(primeiroNome)
        cy.get('#lastname').type(sobrenome)
        cy.get('#email_address').type(email)
        cy.get('#password').type(senha)
        cy.get('#password-confirmation').type(senha)

        //clicar em criar conta
        cy.get('button[title="Create an Account"]').click()

        //validar mensagem de sucesso
        cy.get('.message-error > div').should('contain', 'There is already an account with this email address. If you are sure that it is your email address, click here to get your password and access your account.')
    })
})