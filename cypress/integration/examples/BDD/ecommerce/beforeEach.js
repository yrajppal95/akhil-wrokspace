beforeEach(()=>  //before hook
{
    // runs once before all test in the block
      cy.fixture('example').then(function(data)
      {
          this.data=data
      })

});