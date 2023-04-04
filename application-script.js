document.addEventListener('DOMContentLoaded', function () {

    function addRow(item, quantity, price) {
        // Get the table by its id
        const table = document.getElementById("inventory-table");
      
        // Get the table body (assuming there's only one tbody in the table)
        const tbody = table.getElementsByTagName("tbody")[0];
      
        // Create a new row and append it to the table body
        const row = document.createElement("tr");
        tbody.appendChild(row);
      
        // Create and append cells for each column
        const itemCell = document.createElement("td");
        itemCell.innerHTML = item;
        row.appendChild(itemCell);
      
        const quantityCell = document.createElement("td");
        quantityCell.innerHTML = quantity;
        row.appendChild(quantityCell);
      
        const priceCell = document.createElement("td");
        priceCell.innerHTML = price;
        row.appendChild(priceCell);
      }
      

        // Get the button by its id
    const addButton = document.getElementById("add-def ault-row");

    // Add an event listener for the 'click' event
    addButton.addEventListener("click", function () {
    // Call the addRow function with default values
    addRow("Default Item", 0, "$0.00");
    });

})