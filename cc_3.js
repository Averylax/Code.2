    console.log(`cc_3.js is succesfully uploaded!`);

// Task 1 - Product Price Manegment Scenario 
let prices = [15, 30, 45, 60, 75]; // Prices of the products
    console.log(`Initial Prices: ${prices}`); // Logs the initial prices

prices.push(90); // Adds 90 to the end of the array
prices.shift(); // Removes the first element of the array

    console.log(`Updated Prices: ${prices}`); // Logs the updated prices
// Task 1 - End

// Task 2 - Modyfing Customer Orders Scenario
let orders = [1, 10, 15, 20, 60]; // Quantity of item orders
    console.log(`Initial Orders: ${orders}`); // Logs the initial orders

orders[2] += 5; // Adds 5 to the 3rd element of the array
    console.log(`Updated Orders: ${orders}`); // Logs the updated orders

let totalOrders = orders.reduce((sum, order) => sum + order, 0); // Calculates the total orders
    console.log(`Total Orders: ${totalOrders}`); // Logs the total orders
// Task 2 - End

// Task 3 - Employee Performance Tracking Scenario
let employees = {
    name: `John Doe`, // Name of the employee
    role: `Software Developer`, // Role of the employee
    performanceScore: 80, // Performance score of the employee
    isActive: true // Status of the employee
};
    console.log(`Initial Employee: ${employees.name} is a ${employees.role} with a performance score of ${employees.performanceScore}, work status is ${employees.isActive}.`); // Logs the initial employee

employees.performanceScore += 10; // Adds 20 to the performance score of the employee
employees.promotionEligible = employees.performanceScore >= 85; // Checks if the employee is eligible for promotion

    console.log(`Updated Employee: ${employees.name} is a ${employees.role} with a performance score of ${employees.performanceScore}, work status is ${employees.isActive}, promotion eligbilitiy is ${employees.promotionEligible}.`); // Logs the updated employee
// Task 3 - End

// Task 4 - Customer Feedback Records Scenario
let feedback = [
    { customerName: `Alice`, feedbackText: `Decent Service.`, rating: 3.5 }, // Feedback records
    { customerName: `Bob`, feedbackText: `Food was great but waiter was slow bringing drinks`, rating: 4.5 }, // Feedback records
    { customerName: `Charlie`, feedbackText: `Poor Service. Lights to bright and food had to much flavor.`, rating: 2.5 } // Feedback records
];
console.log(feedback); // Logs the initial feedback records
console.log(`-----Adding another Feedback-----`)
feedback.push({ customerName: `David`, feedbackText: `The best tacos I have ever had`, rating: 5 }); // Adds a new feedback to the array
console.log(feedback); // Logs the updated feedback records
// Task 4 - End

// Task 5 - Inventory Management Scenario
let inventory = {
    itemName: `Laptop`,
    stockCount: 50,
    price: 1000,
    // Method to calculate the total value
    calculateTotalValue: function() {
        return this.stockCount * this.price;
    }
};

console.log(`Inventory Details:`);
console.log(`Item Name: ${inventory.itemName}`)
console.log(`Stock Count: ${inventory.stockCount}`);
console.log(`Price per Item: $${inventory.price}`);
console.log(`Total Value of Inventory: $${inventory.calculateTotalValue()}`);
// Task 5 - End