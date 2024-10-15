function calculateChange(total,payment){

const change = total - payment;

// Round to two decimal places and return
return parseFloat(change.toFixed(2));
};

console.log(calculateChange(10,5));

function isSufficientPayment(total,payment){
    if (payment >= total){
        return true
    } else {
        return false
    };

};


// Function to calculate the total price of items. i got help w this one . 
function calculateTotal(itemsArray) {
    // Initialize a variable to store the total sum
    let total = 0;
  
    // Loop through each item in the array
    itemsArray.forEach(item => {
      // Add the item's price to the total
      total += item.price;
    });
  
    // Return an object containing the total and the list of names
    return {
      totalPrice: total,
      names: itemsArray.map(item => item.name) // Optional: if you want to return names too
    };
  }

function addItem(itemsArray, name, price) {
   
    const newObj = { name: name, price: price };
    
    //add new object to the end of itemsArray
    itemsArray.push(newObj);
  }

function removeItem(itemsArray,index){
  itemsArray.splice(index,1)
}

module.exports = {calculateChange , calculateTotal ,addItem, isSufficientPayment,addItem,removeItem}

