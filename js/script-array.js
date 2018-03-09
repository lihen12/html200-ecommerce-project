//global variable for item names
var cart = []

//global variable for prices of items
var itemPrice = []

/* ***************************************************************************** */
//function to update the cart array when onclick pases on parameter "item"
function cartPush(item, price){
  //see if item is already in cart
  var i = cart.indexOf(item)
  //if not, push item and price into "cart" and "itemPrice" array, respectively
  if(i == -1){
    cart.push(item);
    console.log(cart.length + " items total. Added " + item);
    
    itemPrice.push(price);
    console.log("$" + price + " added to total price");
  } else {
    //if it is, splice item and price from "cart" and "itemPrice" array, respectively
    cart.splice(i, 1);
    console.log(cart.length + " items total. Subtracted " + item);
    
    itemPrice.splice(i, 1);
    console.log("$" + price + " subtracted from total price")
  }
  
  // variable of sum to calculate total price of items in "itemPrice" array
  var sum = itemPrice.reduce(add, 0);

  function add(a, b){
    return a + b;
  }
  
  console.log("Your total price in cart is $" + sum);
}

/* ***************************************************************************** */
// tells us what items are in the "cart" array
function cartInfo(){
  console.log("Here's what's in your cart: " + cart);
}