$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("LaptopsNoteBooks.feature");
formatter.feature({
  "line": 1,
  "name": "Laptops and NoteBooks",
  "description": "",
  "id": "laptops-and-notebooks",
  "keyword": "Feature"
});
formatter.before({
  "duration": 7034392902,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Add and Remove a Mac book from Cart",
  "description": "",
  "id": "laptops-and-notebooks;add-and-remove-a-mac-book-from-cart",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@laptop"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User is on Retail Website",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User click on Laptop \u0026NoteBook tab",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User click on Show all Laptop \u0026NoteBook option",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User click on MacBook  item",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User click add to Cart button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User should see a message \u0027Success: You have added MacBook to your shopping cart!\u0027",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "User should see \u0027\u003c1 [item(s) - $]602.00\u003e\u0027 showed to the cart",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User click on cart option",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user click on red X button to remove the item from cart",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "item should be removed and cart should show \u00270 item(s)\u0027",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTestStepDef.user_is_on_Retail_Website()"
});
formatter.result({
  "duration": 3332078479,
  "status": "passed"
});
formatter.match({
  "location": "LaptopsNoteBooksStepDef.user_click_on_Laptop_NoteBook_tab()"
});
formatter.result({
  "duration": 179938775,
  "status": "passed"
});
formatter.match({
  "location": "LaptopsNoteBooksStepDef.user_click_on_Show_all_Laptop_NoteBook_option()"
});
formatter.result({
  "duration": 700209573,
  "status": "passed"
});
formatter.match({
  "location": "LaptopsNoteBooksStepDef.user_click_on_MacBook_item()"
});
formatter.result({
  "duration": 6999872900,
  "status": "passed"
});
formatter.match({
  "location": "LaptopsNoteBooksStepDef.user_click_add_to_Cart_button()"
});
formatter.result({
  "duration": 5234909397,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Success: You have added MacBook to your shopping cart!",
      "offset": 27
    }
  ],
  "location": "LaptopsNoteBooksStepDef.user_should_see_a_message_Success_You_have_added_MacBook_to_your_shopping_cart(String)"
});
formatter.result({
  "duration": 333172226,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003c1 [item(s) - $]602.00\u003e",
      "offset": 17
    }
  ],
  "location": "LaptopsNoteBooksStepDef.user_should_see_tem_s_showed_to_the_cart(String)"
});
formatter.result({
  "duration": 110766540,
  "status": "passed"
});
formatter.match({
  "location": "LaptopsNoteBooksStepDef.user_click_on_cart_option()"
});
formatter.result({
  "duration": 125758113,
  "status": "passed"
});
formatter.match({
  "location": "LaptopsNoteBooksStepDef.user_click_on_red_X_button_to_remove_the_item_from_cart()"
});
formatter.result({
  "duration": 5401368124,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0 item(s)",
      "offset": 45
    }
  ],
  "location": "LaptopsNoteBooksStepDef.item_should_be_removed_and_cart_should_show_item_s(String)"
});
formatter.result({
  "duration": 5047566883,
  "status": "passed"
});
formatter.after({
  "duration": 1131003426,
  "status": "passed"
});
});