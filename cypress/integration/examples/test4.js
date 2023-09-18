/// <reference types="Cypress"/>

describe('my second test suite',function(){

    it('my second test case!',function(){
        
        cy.visit( "https://rahulshettyacademy.com/AutomationPractice/");
         
        cy.get('#alertbtn').click()
        cy.get('#confirmbtn').click()

        // Window:alert

        cy.on('window:alert',(str) =>
        {
            //mocha
            expect(str).to.equal('Hello , share this practice page and share your knowledge')

        })
              // for confirm
           
        cy.on('window:confirm',(str) =>
        {
            //mocha
            expect(str).to.equal('Hello , Are you sure you want to confirm?')

        })
    

    })

 })
   
