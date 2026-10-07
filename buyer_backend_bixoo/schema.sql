-- BIXOO Buyer Backend - full MySQL schema
-- Run this once in MySQL Workbench (or `mysql -u root -p < schema.sql`).
-- After this, the Python code just reads/writes these tables - it does not create them.

CREATE DATABASE IF NOT EXISTS bixoo_buyer;
USE bixoo_buyer;

-- ---------------------------------------------------------
-- Select Category screen
-- ---------------------------------------------------------

CREATE TABLE sectors (
    id INT AUTO_INCREMENT PRIMARY KEY,
    `key` VARCHAR(50) NOT NULL UNIQUE,
    label VARCHAR(100) NOT NULL
);

CREATE TABLE categories (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL UNIQUE,
    description VARCHAR(255),
    icon VARCHAR(50),
    image_url VARCHAR(500),
    is_verified_sector BOOLEAN DEFAULT TRUE,
    sector_id INT,
    FOREIGN KEY (sector_id) REFERENCES sectors(id)
);

CREATE TABLE suppliers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(200) NOT NULL,
    category_id INT NOT NULL,
    is_verified BOOLEAN DEFAULT TRUE,
    FOREIGN KEY (category_id) REFERENCES categories(id)
);

CREATE TABLE category_requests (
    id INT AUTO_INCREMENT PRIMARY KEY,
    buyer_id INT NOT NULL,
    requested_name VARCHAR(200) NOT NULL,
    details VARCHAR(1000),
    status VARCHAR(30) DEFAULT 'pending',
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- ---------------------------------------------------------
-- Vehicles Sub-Category & Product Reels screen
-- ---------------------------------------------------------

CREATE TABLE subcategories (
    id INT AUTO_INCREMENT PRIMARY KEY,
    category_id INT NOT NULL,
    name VARCHAR(100) NOT NULL,
    icon VARCHAR(500),
    FOREIGN KEY (category_id) REFERENCES categories(id)
);

CREATE TABLE products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    category_id INT NOT NULL,
    subcategory_id INT,
    name VARCHAR(200) NOT NULL,
    tag VARCHAR(50),
    image_url VARCHAR(500),
    seller_id INT,
    is_verified_supplier BOOLEAN DEFAULT TRUE,
    location VARCHAR(100),
    units_ready INT DEFAULT 0,
    rating FLOAT DEFAULT 0,
    contract_price FLOAT,
    contract_unit VARCHAR(20) DEFAULT 'day',
    bulk_price_min FLOAT,
    bulk_price_max FLOAT,
    bulk_price_unit VARCHAR(20) DEFAULT 'Lakh',
    FOREIGN KEY (category_id) REFERENCES categories(id),
    FOREIGN KEY (subcategory_id) REFERENCES subcategories(id)
);

-- ---------------------------------------------------------
-- Post Requirement flow (Delivery Location, Budget & Details, Requirement Posted)
-- ---------------------------------------------------------

CREATE TABLE requirements (
    id INT AUTO_INCREMENT PRIMARY KEY,
    requirement_code VARCHAR(20) UNIQUE,
    buyer_id INT NOT NULL,
    category_id INT NOT NULL,
    product_id INT,
    product_name VARCHAR(200) NOT NULL,
    quantity FLOAT NOT NULL,
    unit VARCHAR(20) DEFAULT 'units',
    delivery_location VARCHAR(255),
    delivery_lat FLOAT,
    delivery_lng FLOAT,
    required_date DATETIME,
    required_time VARCHAR(20),
    budget FLOAT,
    details VARCHAR(1000),
    attachment_urls VARCHAR(1000),
    status VARCHAR(30) DEFAULT 'posted',
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (category_id) REFERENCES categories(id),
    FOREIGN KEY (product_id) REFERENCES products(id)
);

-- ---------------------------------------------------------
-- Seed data (same values the app was seeding before)
-- ---------------------------------------------------------

INSERT INTO sectors (`key`, label) VALUES
('heavy_industry', 'Heavy Industry'),
('agro_food', 'Agro & Food'),
('logistics_fleet', 'Logistics & Fleet'),
('commercial_goods', 'Commercial Goods');

INSERT INTO categories (name, description, icon, image_url, is_verified_sector, sector_id) VALUES
('Vehicles', 'Commercial trucks, vans and fleet...', 'truck', 'https://picsum.photos/seed/truck/400/300', 1, 3),
('Agriculture', 'Crops, seeds and farming produce.', 'wheat', 'https://picsum.photos/seed/wheat/400/300', 1, 2),
('Machinery', 'Industrial equipment and heavy tooling lines.', 'gear', 'https://picsum.photos/seed/gear/400/300', 1, 1),
('Electronics', 'Components, devices, circuits and modules.', 'chip', 'https://picsum.photos/seed/chip/400/300', 1, 1),
('Raw Materials', 'Construction, minerals, steel and bulk sand.', 'rocks', 'https://picsum.photos/seed/rocks/400/300', 1, 1),
('Packaging', 'Boxes, pallets, containers and wrap...', 'box', 'https://picsum.photos/seed/box/400/300', 1, 4),
('Chemicals', 'Industrial liquids, fertilizers and fuels.', 'flask', 'https://picsum.photos/seed/flask/400/300', 1, 1),
('Textiles', 'Bulk fabrics, yarn and wholesale apparel.', 'fabric', 'https://picsum.photos/seed/fabric/400/300', 1, 4);

INSERT INTO subcategories (category_id, name) VALUES
(1, 'Mini Trucks'),
(1, 'Cargo Vans'),
(1, 'Open Lorries'),
(1, 'Containers');

INSERT INTO products (category_id, subcategory_id, name, tag, image_url, is_verified_supplier, location, units_ready, rating, contract_price, contract_unit, bulk_price_min, bulk_price_max, bulk_price_unit) VALUES
(1, 1, 'Tata Ace Gold Plus (High Deck)', 'MINI COMMERCIAL', 'https://picsum.photos/seed/tata-ace/500/700', 1, 'Chennai, TN', 32, 4.9, 3400, 'day', 4.20, 4.65, 'Lakh');

-- Suppliers: adjust counts per category as needed (Vehicles=140, Agriculture=320,
-- Machinery=210, Electronics=480, Raw Materials=195, Packaging=310, Chemicals=115, Textiles=260).
-- A quick way to bulk-insert N rows for category_id = 1 (Vehicles):
-- INSERT INTO suppliers (name, category_id, is_verified)
-- SELECT CONCAT('Vehicles Supplier ', n), 1, TRUE
-- FROM (SELECT @row := @row + 1 AS n FROM information_schema.columns, (SELECT @row := 0) r LIMIT 140) t;
