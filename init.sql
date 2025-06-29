CREATE DATABASE IF NOT EXISTS box_delivery;

USE box_delivery;

CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    code VARCHAR(50) NOT NULL UNIQUE,
    role ENUM('supplier', 'recipient') NOT NULL DEFAULT 'recipient'
);

CREATE TABLE IF NOT EXISTS box (
    id INT AUTO_INCREMENT PRIMARY KEY,
    identifier VARCHAR(50) NOT NULL UNIQUE
    -- address VARCHAR(255) NULL,
);

CREATE TABLE IF NOT EXISTS shelf (
    id INT AUTO_INCREMENT PRIMARY KEY,
    box_id INT NOT NULL,
    user_id INT NULL,
    status ENUM('available', 'in_use') NOT NULL DEFAULT 'available',
    FOREIGN KEY (box_id) REFERENCES box(id) ON DELETE CASCADE,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS package (
    id INT AUTO_INCREMENT PRIMARY KEY,
    shelf_id INT NOT NULL,
    user_id INT NULL,
    pin VARCHAR(10) NOT NULL,
    FOREIGN KEY (shelf_id) REFERENCES shelf(id) ON DELETE CASCADE,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

INSERT INTO users (username, code, role) VALUES
('supplier1', 'SUP123', 'supplier'),
('recipient1', 'REC123', 'recipient');

-- CREATE USER IF NOT EXISTS 'test_user'@'%' IDENTIFIED WITH caching_sha2_password BY 'test_password';
CREATE USER IF NOT EXISTS 'test_user'@'%' IDENTIFIED BY 'test_password';

GRANT ALL PRIVILEGES ON box_delivery.* TO 'test_user'@'%';

-- Apply the changes
FLUSH PRIVILEGES;