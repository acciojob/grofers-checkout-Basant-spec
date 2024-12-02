// Create a button to trigger the sum calculation
const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

// Function to calculate the total price
const getSum = () => {
  // Get all the price elements from the table
  const prices = document.querySelectorAll(".price");

  // Initialize a variable to hold the total sum of prices
  let total = 0;

  // Loop through each price element, convert the text to a number, and add it to the total
  prices.forEach(price => {
    total += parseFloat(price.textContent);  // Convert text content to number (float)
  });

  // Create a new table row for the total price
  const totalRow = document.createElement("tr");

  // Create a cell for the "Total Price" label and add it to the row
  const labelCell = document.createElement("td");
  labelCell.textContent = "Total Price";  // Set the label for the total row
  totalRow.appendChild(labelCell);

  // Create a cell for the total value and add it to the row
  const totalCell = document.createElement("td");
  totalCell.textContent = total;  // Display the calculated total sum
  totalRow.appendChild(totalCell);

  // Assign the ID "ans" to the new row
  totalRow.id = "ans";

  // Append the new row to the table
  const table = document.querySelector("table");
  table.appendChild(totalRow);
};

// Add an event listener to the "Get Total Price" button to trigger the getSum function
getSumBtn.addEventListener("click", getSum);
