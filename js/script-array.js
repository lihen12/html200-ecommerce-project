var cart = [
  
]

var itemPrice = [
  
]

function cartPush(item){
  var i = cart.indexOf(item)
  
  if(i == -1){
    cart.push(item);
    console.log(cart.length + " added " + item);
  } else {
    cart.splice(i, 1);
    console.log(cart.length);
  }
}

function cartInfo(){
  console.log("Here's what's in your cart: " + cart);
}

//can't get this bit of code to work. it won't subtract when I need it to :(

function pricePush(price){
  var conversion = parseFloat(price);
  
  var p = itemPrice.indexOf(price)
  
  if(p == -1){
    itemPrice.push(conversion);
  } else {
    itemPrice.splice(p, 1);
  }
  
  console.log(conversion);
  
  var sum = itemPrice.reduce(add, 0);

  function add(a, b){
    return a + b;
  }
  
  console.log(sum);
}

