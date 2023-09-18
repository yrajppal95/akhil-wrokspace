/// <reference types="Cypress"/>

describe('my second test suite',function(){

    it('my second test case!',function(){

        cy.visit( "https://rahulshettyacademy.com/seleniumPractise/#/"); 
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)
       
        //parent child chaining
        cy.get('.products').as('productlocator') // putting in variable using alias as method 
        

        // identifying element dynamically with text
        cy.get('@productlocator').find('.product').each(($el , index ,$list) => {

            const textveg=$el.find('h4.product-name').text()
            if(textveg.includes('Cashews'))
            {
               cy.wrap($el).find('button').click()
            }
         })
               cy.get('.cart-icon').click()
               cy.contains('PROCEED TO CHECKOUT').click()
               cy.contains('Place Order').click()
           















    })
})    
