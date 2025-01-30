    console.log(`cc_3.js is succesfully uploaded!`);

// Task 1 - Product Price Manegment Scenario 
let prices = [15, 30, 45, 60, 75]; // Prices of the products
    console.log(`Initial Prices: #${prices}`); // Logs the initial prices

prices.push(90); // Adds 90 to the end of the array
prices.shift(); // Removes the first element of the array

    console.log(`Updated Prices: $${prices}`); // Logs the updated prices
// Task 1 - End

// Task 2 - Modyfing Customer Orders Scenario
let orders = [1, 10, 15, 20, 60]; // Quantity of item orders
    console.log(`Initial Orders: #${orders}`); // Logs the initial orders

orders[2] += 5; // Adds 5 to the 3rd element of the array
    console.log(`Updated Orders: #${orders}`); // Logs the updated orders

let totalOrders = orders.reduce((sum, order) => sum + order, 0); // Calculates the total orders
    console.log(`Total Orders: #${totalOrders}`); // Logs the total orders
// Task 2 - End