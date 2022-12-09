import { Product } from "../models/Product";
import { BaseDatabase } from "./BaseDatabase";

export class ProductDatabase extends BaseDatabase {
    public static TABLE_USERS = "Labe_Users"
    static TABLE_PRODUCTS: any;

    public async getAllUProduct() {
        const result = await BaseDatabase
        .connection(ProductDatabase.TABLE_USERS)
        .select()
        return result
    }

    public async createProduct(product: Product) {
        await BaseDatabase
        .connection(ProductDatabase.TABLE_USERS)
        .insert({
            id: product.getId(),
            name: product.getName(),
            price: product.getPrice()
        })
    }

    public async getProductById(id: string) {
        const result = await BaseDatabase
        .connection(ProductDatabase.TABLE_USERS)
        .select()
        .where({ id: id })
        return result
    }
}
