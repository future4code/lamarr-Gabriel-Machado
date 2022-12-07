export class Purchases {
    constructor(
        private id: string,
        private userId: string,
        private productId: string,
        private quantity: number,
        private totalPrice: number
    ) {
        this.id = id
        this.userId = userId
        this.productId = productId
        this.quantity = quantity,
        this.totalPrice = totalPrice
    }

    public getId() {
        return this.id
    }

    public getUserId() {
        return this.userId
    }

    public getProductId() {
        return this.productId
    }

    public getQuantity() {
        return this.quantity
    }

    public getTotalPrice() {
        return this.totalPrice
    }

    public setId(newId: string) {
        this.id = newId
    }

    public setUserId(newUserId: string) {
        this.userId = newUserId
    }

    public setProductId(newProductId: string) {
        this.productId =  newProductId
    }

    public setQuantity(newQuantity: number) {
        this.quantity =  newQuantity
    }

    public setTotalPrice(newTotalPrice: number) {
        this.totalPrice =  newTotalPrice
    }
}