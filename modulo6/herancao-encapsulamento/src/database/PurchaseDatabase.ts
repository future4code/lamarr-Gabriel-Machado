import { Purchase } from "../models/Purchase";
import { BaseDatabase } from "./BaseDatabase";
import { ProductDatabase } from "./ProductDatabase";
import { UserDatabase } from "./UserDatabase";

export class PurchaseDatabase extends BaseDatabase {
    public static TABLE_PURCHASES = "Labe_Purchases"

    public async getUsersPurchases(id: string){
        const [result] = await BaseDatabase
        .connection.raw(`
        SELECT
        ${UserDatabase.TABLE_USERS}.email,
        ${ProductDatabase.TABLE_PRODUCTS}.name AS product_name,
        ${ProductDatabase.TABLE_PRODUCTS}.price AS product_price,
        ${PurchaseDatabase.TABLE_PURCHASES}.quantity AS product_quantity,
        ${PurchaseDatabase.TABLE_PURCHASES}.total_price
        FROM ${PurchaseDatabase.TABLE_PURCHASES}
        JOIN ${UserDatabase.TABLE_USERS}
        ON ${PurchaseDatabase.TABLE_PURCHASES}.user_id = ${UserDatabase.TABLE_USERS}.id
        JOIN ${ProductDatabase.TABLE_PRODUCTS}
        ON ${PurchaseDatabase.TABLE_PURCHASES}.product_id = ${ProductDatabase.TABLE_PRODUCTS}.id
        WHERE ${PurchaseDatabase.TABLE_PURCHASES}.user_id = ${id};
        `)
        return result
    }

    public async createPurchase(purchase: Purchase){
        await BaseDatabase
        .connection(PurchaseDatabase.TABLE_PURCHASES)
        .insert({
            id: purchase.getId(),
            user_id: purchase.getUserId(),
            product_id: purchase.getProductId(),
            quantity: purchase.getQuantity(),
            total_price: purchase.getTotalPrice()
        })
    }
}