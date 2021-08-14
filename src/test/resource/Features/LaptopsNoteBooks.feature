Feature: Laptops and NoteBooks


@laptop
  Scenario: Add and Remove a Mac book from Cart
    Given User is on Retail Website
    When User click on Laptop &NoteBook tab
    And User click on Show all Laptop &NoteBook option
    And User click on MacBook  item
    And User click add to Cart button
    Then User should see a message 'Success: You have added MacBook to your shopping cart!'
    And User should see '<1 [item(s) - $]602.00>' showed to the cart
    And User click on cart option
    And user click on red X button to remove the item from cart
    Then item should be removed and cart should show '0 item(s)'
