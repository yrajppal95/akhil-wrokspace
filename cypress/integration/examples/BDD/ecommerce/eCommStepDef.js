import { Given,When,Then,And } from "cypress-cucumber-preprocessor/steps";
import { when } from "cypress/types/jquery";

const homepage = new HomePage()
const productpage = new ProductPage()

Given('I open Ecommerce page',function()
{
    cy.visit(Cypress.env('url')+"/angularpractice/")
})

when('I add items to cart',()=>
{
    homepage.getShopTab().click()
        
    this.data.productName.forEach(function(element)  {
   
        cy.selectProduct(element)
        
    });    
     productpage.getCheckOut().click()
})

And('Validate the total price',()=>
{
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
})

Then('select the country submit and verify thankyou message',()=>
{
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
// given we have already mention up
when('I fill the form details',function(dataTable)
{
    //[name , gender] [boz , male] array converting into in array retriving here with rawtable  method
    homepage.getEditbox().type(dataTable.rawTable[1][0])
    homepage.getGender().select(dataTable.rawTable[1][1])
})

And('validate the form behaviour',()=>
{
    homepage.getTwoWayDataBinding().should('have.value',this.data.name)
    homepage.getEditbox().should('have.attr','minlength','2')
    homepage.getEnterpreuneur().should('be.disabled')
    Cypress.config('defaultCommandTimeout',8000)
})

Then('select the shop page',()=>
{
    homepage.getShopTab().click()
})
