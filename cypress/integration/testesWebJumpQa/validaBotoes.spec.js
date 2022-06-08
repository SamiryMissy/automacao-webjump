/// <reference types="cypress" />

describe('Testes End to End ', () => {
    beforeEach(() => {
      cy.visit("qa-test/")
    })
    const getIframeBody = () => {
        return cy
        .get('#iframe_panel_body iframe')
        .its('0.contentDocument.body').should('not.be.empty')
        .then(cy.wrap)
    }
      it('Clicar nos botões e verificar se os mesmo sumiram ', () => {
        
        cy.get('#btn_one').click()
        cy.get('#btn_one').should('not.be.visible')
        cy.get('#btn_two').click()
        cy.get('#btn_two').should('not.be.visible')
        cy.get('#btn_link').click()
        cy.get('#btn_link').should('not.be.visible')
  
      })
  
      it('Clicar nos botões dentro de IFrame Buttons e verificar se os mesmo sumiram ', () => {

        getIframeBody().find('#btn_one').click()
        getIframeBody().find('#btn_one').should('not.be.visible')
        getIframeBody().find('#btn_two').click()
        getIframeBody().find('#btn_two').should('not.be.visible')
        getIframeBody().find('#btn_link').click()
        getIframeBody().find('#btn_link').should('not.be.visible')
        
  
      })

      it('Clicar nos botões e verificar se os mesmo sumiram ', () => {
        
        cy.get('#first_name').type("teste")
        cy.get('#btn_one').click()
        cy.get('#opt_three').check()
        cy.get('#select_box').select("option_two")
  
      })


    })
  