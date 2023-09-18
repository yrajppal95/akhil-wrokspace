/// <reference types="Cypress"/>

describe('my second test suite',function(){

    it('my second test case!',function(){
        
        cy.visit( "https://rahulshettyacademy.com/AutomationPractice/");
         
      //  cy.get('div .mouse-hover-content').invoke('show')

        // cypress can click on hidden element by passing an argument in click here we can do without using show 
      
    
      //  cy.contains('Top').click()
        cy.contains('Top').click({force:true})
        cy.url().should('include','top')
    

    })

 })
   
