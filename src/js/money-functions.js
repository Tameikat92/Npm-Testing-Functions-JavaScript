


function formatCurrency(amount){
    // Format the amount with 2 decimal places
  const formattedAmount = Math.abs(amount).toFixed(2);
  
  // Check if the amount is negative, and prepend "-" before "$"
  if (amount < 0) {
    return `-$${formattedAmount}`;
  } else {
     // If positive, prepend "$"
  return `$${formattedAmount}`;
  };
    
};

function getCoins(cents){
    const change = 
        {
            quarters: 0,
            dimes: 0,
            nickels: 0,
            pennies: 0
      };
       // Calculate tquarters
  change.quarters = Math.floor(cents / 25);
  cents %= 25; // Update cents to remaining amount

  // Calculate dimes
  change.dimes = Math.floor(cents / 10);
  cents %= 10; // Update cents to remaining amount

  // Calculate nickels
  change.nickels = Math.floor(cents / 5);
  cents %= 5; // Update cents to remaining amount

  // Remaining change are pennies
  change.pennies = cents;

  return change;
      
}

module.exports = {formatCurrency, getCoins};