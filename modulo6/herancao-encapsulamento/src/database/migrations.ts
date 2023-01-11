import { BaseDatabase } from "./BaseDatabase";
import { products, purchases, users } from "./data";
import { TABLE_PRODUCTS, TABLE_PURCHASES, TABLE_USERS } from "./tableNames";
import { UserDatabase } from "./UserDatabase";

class Migrations extends BaseDatabase {
    public async createTables() {
        BaseDatabase.raw(`
DROP TABLE IF EXISTS ${TABLE_PURCHASES}, ${TABLE_PRODUCTS}, ${TABLE_USERS};

CREATE TABLE IF NOT EXISTS ${TABLE_USERS}(
    id VARCHAR(255) PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS ${TABLE_PRODUCTS}(
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    price DECIMAL(6,2) NOT NULL
);

CREATE TABLE IF NOT EXISTS ${TABLE_PURCHASES}(
    id VARCHAR(255) PRIMARY KEY,
    user_id VARCHAR(255) NOT NULL,
    product_id VARCHAR(255) NOT NULL,
    quantity INT NOT NULL,
    total_price DECIMAL(6,2) NOT NULL,
    FOREIGN KEY (user_id) REFERENCES ${TABLE_USERS}(id),
    FOREIGN KEY (product_id) REFERENCES ${TABLE_PRODUCTS}(id)
);

`)
    }

    public async insertData() {
        await BaseDatabase.connection(UserDatabase.TABLE_USERS)
        .insert(users)
        .then(() => console.log(`${TABLE_USERS} populated!`))
        .catch(this.printError);

        await BaseDatabase.connection(TABLE_PRODUCTS)
        .insert(products)
        .then(() => console.log(`${TABLE_PRODUCTS} populated!`))
        .catch(this.printError);

        await BaseDatabase.connection(TABLE_PURCHASES)
        .insert(purchases)
        .then(() => console.log(`${TABLE_PURCHASES} populated!`))
        .catch(this.printError);
    }

    public async printError(error: any) {
        console.log(error.sqlMessage || error.message);
    }

}

const migrations = new Migrations();
migrations.createTables();
migrations.insertData();

