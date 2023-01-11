import { Knex } from 'knex';
import { TABLE_USERS } from '../database/tableNames';
import { User } from './User';

export class UserDataBase {
    constructor(private connection:Knex) {
        this.connection = connection;
    }

    public insertUser=async(newUser:User)=>{
        await this.connection("Labe_Users").insert(newUser);
     }

    public getUsers = async()=>{
        const result = await this.connection(TABLE_USERS).select();
        return result;
    }
}