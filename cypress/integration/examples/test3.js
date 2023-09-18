/// <reference types="Cypress"/>

describe('my second test suite',function(){

    it('my second test case!',function(){
          
        // Check boxes 

        cy.visit( "https://rahulshettyacademy.com/AutomationPractice/");
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1') 
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
        cy.get('input[type="checkbox"]').check(['option2','option3'])
        
        // Static Dropdown

        cy.get('#dropdown-class-example').select('option2').should('have.value','option2')

        // Dynamic Table

        cy.get('#autocomplete').type('ind')

        cy.get('.ui-menu-item-wrapper ').each(($e1, index, $list) => {

            if($e1.text()==="India")
            {
                cy.wrap($e1).click()
            }
    
        })
           // validating india is selected

           cy.get('#autocomplete').should('have.value','India')

           // Visible And Invisible

           cy.get('#displayed-text').should('be.visible')
           cy.get('#hide-textbox').click()
           cy.get('#displayed-text').should('not.be.visible')
           cy.get('#show-textbox').click()
           cy.get('#displayed-text').should('be.visible')

           // Radio button

           cy.get('input[value="radio1"]').check().should('be.checked')
    

    })

 })
   
