Feature: End to end Ecommerce validation

    application regression

    Scenario: Ecommerce product delivery
    Given I open Ecommerce page
    When I add items to cart
    And Validate the total price
    Then select the country submit and verify thankyou message

    Scenario: Filling the  form to shop
    Given I open Ecommerce page
    When I fill the form details
    |name | gender |
    |bobz | male |
    And validate the form behaviour
    Then select the shop page