export enum USER_TYPE{
    ADMIN = "ADMIN",
    NORMAL = "NORMAL"
}

export type User = {
    id: number, 
    name: string, 
    email: string, 
    type: string,
    age: number
}
