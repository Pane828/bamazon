var mysql = require("mysql");
var inquirer = require("inquirer");

var connect = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password",
  database: "bamazon_DB"
});

// listAll();
option();
// function displayProduct() {
//  connect.query("SELECT * FROM products", function(err, data) {
//     if (err) throw err;
//     console.log(data);
//    connect.end();
//   });
// }

function listAll() {
connect.query("SELECT * FROM products", function(err, data) {
    for (var i = 0; i < data.length; i++) {
      console.log(data[i].id + " | " + "Product: " + data[i].product_name + " | " + "Department: " + data[i].department_name + " | " + 
      "Price: " + data[i].price + " | " + "Quantity: " + data[i].stock_quantity);
    }
    console.log("-----------------------------------");
  });
    connect.end();
}

function option() {
  connect.query("SELECT * FROM products", function(err, results) {
    if (err) throw err;
    inquirer
      .prompt([
        {
          name: "selection",
          type: "list",
          choices: function() {
            var itemArray = [];
            for (var i = 0; i < results.length; i++) {
              itemArray.push(results[i].product_name);
            }
            return itemArray;
          },
          message: "Which item would you like to purchase?"
        },
        {
          name: "item_quantity",
          type: "input",
          message: "How many would you like to buy?"
        }
      ])
      .then(function(answer) {
        var selectedItem;
        var selectedQuantity;
        var inputQuantity = parseFloat(answer.item_quantity);
        for (var i = 0; i < results.length; i++) {
          if (results[i].product_name == answer.selection) {
            selectedItem = results[i].product_name;
            selectedPrice = results[i].price
            selectedQuantity = parseFloat(results[i].stock_quantity);
          }
        }
        if (selectedQuantity > inputQuantity) {
          var newQuantity = selectedQuantity - inputQuantity;
          connect.query(
            "UPDATE products SET ? WHERE ?",
            [
              {
                stock_quantity: newQuantity
              },
              {
                product_name: selectedItem
              }
            ],
            function(error) {
              console.log("The order has been placed");
              console.log("The cost of the purchase: " + inputQuantity * selectedPrice)
              listAll();
            }
          );
        }
        else {
          console.log("Not enough item in inventry");
            console.log(selectedItem);
            console.log(selectedQuantity);
            console.log(inputQuantity);
          listAll();
        }
      });
  });
}
