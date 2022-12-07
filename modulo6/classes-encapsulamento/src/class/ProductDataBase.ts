import { Knex } from "knex";
import { TABLE_PRODUCTS } from "../database/tableNames";
import { Product } from "./Product";

export class ProductDataBase{
    constructor(private connection:Knex){
        this.connection=connection;
    }

    public insertProduct=async(newProduct:Product)=>{
        await this.connection(TABLE_PRODUCTS).insert(newProduct);
     }

    public getProducts=async()=>{
       const result= await this.connection(TABLE_PRODUCTS).select();
       return result;
    }
    
}