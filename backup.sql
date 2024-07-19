CREATE TABLE cities (
    ->     id INT AUTO_INCREMENT PRIMARY KEY,
    ->     name VARCHAR(255) NOT NULL,
    ->     country VARCHAR(255),
    ->     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    -> );
Query OK, 0 rows affected (0.07 sec)

mysql>
mysql> CREATE TABLE search_history (
    ->     id INT AUTO_INCREMENT PRIMARY KEY,
    ->     city_id INT,
    ->     search_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    ->     FOREIGN KEY (city_id) REFERENCES cities(id)
    -> );
Query OK, 0 rows affected (0.09 sec)

mysql> INSERT INTO cities (name, country) VALUES
    -> ('New York', 'USA'),
    -> ('London', 'UK'),
    -> ('Tokyo', 'Japan');
Query OK, 3 rows affected (0.03 sec)
Records: 3  Duplicates: 0  Warnings: 0