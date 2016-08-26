var groceries = ["Milk", "Eggs", "Frosted Flakes", "Salami", "Juice"];
var prices = [2, 3, 4, 8, 3];
var shoppingList = [];
function addMilk(){
 
shoppingList.push(prices[0]);   
console.log(shoppingList);
  
}

function addEggs(){
 
shoppingList.push(prices[1]);   
console.log(shoppingList);
  
}
function addFrostedFlakes(){
 
shoppingList.push(prices[2]);   
console.log(shoppingList);
  
}

function addSalami(){
 
shoppingList.push(prices[3]);   
console.log(shoppingList);
  
}
function addJuice(){
 
shoppingList.push(prices[4]);   
console.log(shoppingList);
  
}

function checkout(){
var sum=0;
for (var i = 0; i < shoppingList.length; i++) 
sum = sum + shoppingList [i];  
  
console.log(sum);
shoppingList.clear; 
}






// for (var i = 0; i < groceries.length; i++) {




// }