/// <reference types="Cypress"/>

import HomePage  from '../PageObject/HomePage'
import ProductPage from '../PageObject/ProductPage'
describe('my second test suite',function()
{

    before(function(){  //before hook
        // runs once before all test in the block
          cy.fixture('example').then(function(data)
          {
              this.data=data
          })

    })
     
    it('my second test case!',function(){
       
        const homepage = new HomePage()
        const productpage = new ProductPage()
        
      //  cy.visit('https://rahulshettyacademy.com/angularpractice/')
        cy.visit(Cypress.env('url')+"/angularpractice/") //anotherway when we set environmental variables
        
        homepage.getEditbox().type(this.data.name)
        homepage.getGender().select(this.data.gender)
        homepage.getTwoWayDataBinding().should('have.value',this.data.name)
        homepage.getEditbox().should('have.attr','minlength','2')
        homepage.getEnterpreuneur().should('be.disabled')

        homepage.getShopTab().click()
        
        this.data.productName.forEach(function(element)  {
       
            cy.selectProduct(element)
            
        });    
         productpage.getCheckOut().click() 
         var sum =0
         cy.get('tr td:nth-child(4) strong').each(($el, index, $list) =>{
            
            const amount=$el.text()
            var res=amount.split(" ")
            res =res[1].trim()
            sum=Number(sum)+Number(res)
         })
            .then(function() // promise because it will print 0 in sum bcz its all java scprit in asynchronus in nature 
            {
            cy.log(sum)
            } )  
            cy.get('h3 strong').then(function(element) // cnt do like .text() (jquery) we have to resolve the promise 
            {
                const amount=element.text()
                var res=amount.split(" ")
                var total=res[1].trim()
                expect(Number(total)).to.equal(sum)
            })
         cy.contains('Checkout').click()
         cy.get('#country').type('India')
         cy.get('.suggestions > ul > li > a').click()
         cy.get('#checkbox2').click({force: true})
         cy.get('input[type="submit"]').click()
      // cy.get('.alert').should('have.text','Success! Thank you! Your order will be delivered in next few weeks :-).')
         cy.get('.alert').then(function(element)  //resolving promises for text()
         {
           const actualtext=element.text()
           expect(actualtext.includes("Success")).to.be.true
         })
    })

})

   
