// Create the "Get Total Price" button dynamically
const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

// Function to calculate the sum of all prices
const getSum = () => {
  // Get all elements with the class "price" (these are the price cells in the table)
  const prices = document.querySelectorAll(".price");
  
  // Initialize the total sum to 0
  let total = 0;

  // Loop through each price element and add its value to the total
  prices.forEach(price => {
    total += parseFloat(price.textContent);  // parseFloat ensures we are dealing with numbers
  });

  // Create a new row for the total price
  const totalRow = document.createElement("tr");

  // Create a cell for the "Total Price" label and append it to the row
  const labelCell = document.createElement("td");
  labelCell.textContent = "Total Price";
  totalRow.appendChild(labelCell);

  // Create a cell for the total price and append it to the row
  const totalCell = document.createElement("td");
  totalCell.textContent = total;  // Display the total price
  totalRow.appendChild(totalCell);

  // Append the new row to the table
  const table = document.querySelector("table");
  table.appendChild(totalRow);
};

// Add the event listener to the button to trigger the getSum function when clicked
getSumBtn.addEventListener("click", getSum);
