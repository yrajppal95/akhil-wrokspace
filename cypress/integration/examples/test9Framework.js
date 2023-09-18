/// <reference types="Cypress"/>

describe('my second test suite',function()
{

    before(function(){
        // runs once before all test in the block
          cy.fixture('example').then(function(data)
          {
              this.data=data
          })

    })
     
    it('my second test case!',function(){

        cy.visit('https://rahulshettyacademy.com/angularpractice/')
        cy.get('input[name="name"]:nth-child(2)').type(this.data.name)
        cy.get('select').select(this.data.gender)
        cy.get('input[name="name"]:nth-child(1)').should('have.value',this.data.name)
        cy.get('input[name="name"]:nth-child(2)').should('have.attr','minlength','2')
        cy.get('#inlineRadio3').should('be.disabled')

        cy.get('a[href="/angularpractice/shop"]').click()
       
        // building customised cypress command for reusing the code

        //  cy.get('h4.card-title').each(($el, index, $list) => {
        //        if($el.text().includes('Blackberry'))
        //        {
        //        cy.get('button.btn.btn-info').eq(index).click()
        //        }
        // })

         // another way building customized command function support folder 
           
       //  cy.selectProduct('Blackberry')

        // how to iterate in array using java scprit example.json declared array here

       // this.data.productName
        this.data.productName.forEach(function(element)  {
       cy.log(element)
            cy.selectProduct(element)
            
        });    
    

    })

})

   
