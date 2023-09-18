/// <reference types="Cypress"/>

describe('my first test suite',function(){

    it('my firsttest case!',function(){

        cy.visit( "https://rahulshettyacademy.com/seleniumPractise/#/"); 
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)
        cy.get('.product').should('have.length',5)
        cy.get('.product:visible').should('have.length',4)
        //parent child chaining
        cy.get('.products ').as('productlocator') // putting in variable using alias as method 
        cy.get('@productlocator').find('.product').should('have.length',4)
        cy.get('@productlocator').find('.product').eq(1).contains('ADD TO CART').click().then(function()
        //promise to that it will print in sequence becoz console is non cypress command
        {
            console.log('sf')
        })

        // identifying element dynamically with text
        cy.get('@productlocator').find('.product').each(($el , index ,$list) => {

            const textveg=$el.find('h4.product-name').text()
            if(textveg.includes('Cashews'))
            {
               cy.wrap($el).find('button').click()
            }
         })

    //assert if logo text is correctly displayed

    cy.get('.brand').should('have.text','GREENKART')

    // this is to prints in logs

   cy.get('.brand').then(function(logoelement)
   {
      cy.log(logoelement.text())
   })















    })
})    
