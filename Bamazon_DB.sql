CREATE DATABASE bamazon_DB;

USE bamazon_DB;

CREATE TABLE products(
  id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(100) NOT NULL,
  department_name VARCHAR(100) NOT NULL,
  price DECIMAL(65,2) NULL,
  stock_quantity INT default 0,
  PRIMARY KEY (id)
);

Select * from products;

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Clear case cover iPhone 7", "Phone Accessories", 8.99, 20);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Apple Lightning to USB Cable", "Phone Accessories", 7.99, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("6 Port USB Wall Charger", "Phone Accessories", 24.99, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Bose QuietComfort 25", "Headphones", 279.00, 5);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Amazon Basics In-Ear Headphones", "Headphones", 5.99, 30);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("HP Laptop 15-inch", "Laptop", 849.99, 5);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Samsung ChromeBook", "Laptop", 499.00, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Samsung 43-inch 1080p TV", "TV", 333.99, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Fire TV Streaming Media Player", "TV Accessories", 89.99, 5);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Roku Streaming Stick", "TV Accessories", 31.99, 5);