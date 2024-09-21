describe('Suíte de testes do Integrado.', () => {
  it('Deve validar campos Área do Candidato e Inscreva-se', () => {
    cy.visit('https://www.grupointegrado.br')
    cy.title().should('eq', 'Início | Centro Universitário Integrado')
    cy.contains('Área do candidato').should('exist')
    cy.contains('Inscreva-se').should('exist')
  })


  it('Deve clicar no botão Área do candidato e validar URL', () => {
    cy.visit('https://www.grupointegrado.br')
    cy.title().should('eq', 'Início | Centro Universitário Integrado')
          //Interagindo com elemento de click
    cy.contains('Área do candidato').should('exist').first().click()

    cy.url().should('eq', 'https://www.grupointegrado.br/#area-candidato')
  })


  it('Deve acessar a opção de graduação e informar CPF, DATA DE NASCIMENTO', () => {
    cy.visit('https://portal.apprbs.com.br/ceigraduacao/login')
    cy.get('#mat-input-0').type('000-000-000.00')
    cy.get('#mat-input-1').type('14/09/1999')
    cy.contains('Acessar').should('exist').first().click()

    //validar mensagens de errro
    cy.get('.ps-notification-title').should('have.text', 'Não foi possivel fazer o login')

  })
})


describe('Teste acessando site magento e validando o título', () => {
  it('Deve acessar o site magento', () => {
    cy.visit('http://magento2-demo.magebit.com')
    cy.title().should('eq', 'Magento 2 Commerce (Enterprise) Demo - Magebit')
  })
})
