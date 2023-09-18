/// <reference types="Cypress"/>

describe('Handling child window',() => {

    it('should handle child window',() => {
        
      cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
       
      cy.get('tr td:nth-child(2)').each(($e1, index, $list) => {

       const text= $e1.text()
       if(text.includes("Python"))
       {
        cy.get('tr td:nth-child(2)').eq(index).next().then(function(price) //here we cant use text method we have to use promises bcz text is j query object
        {
           const pricetext =  price.text()
           // compairing to original prise
            expect(pricetext).to.equal('25')
        })

       }

      })

    

    })

 })
   
