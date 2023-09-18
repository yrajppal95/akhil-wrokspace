class HomePage
{
getEditbox()
{
   return cy.get('input[name="name"]:nth-child(2)')
}

getTwoWayDataBinding()
{
  return  cy.get('input[name="name"]:nth-child(1)')
}

getGender()
{
   return cy.get('select')
}

getEnterpreuneur()
{
  return cy.get('#inlineRadio3')
}
 getShopTab()
 {                                                             //test10 attached object creation 
   return cy.get('a[href="/angularpractice/shop"]')
 }

}
    export default HomePage;