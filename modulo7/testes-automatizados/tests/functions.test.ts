import { performPurchase } from "../src/functions"  

//a)
test("Testing balance greater than value", () => {
	const user: User = {
		name: "Astrodev",
		balance: 200
	}

	const result = performPurchase(user, 40)
	
	expect(result).toEqual({
		name: "Astrodev",
		balance: 160
	})
})

//b)
test("Testing balance equal to value", () => {
	const user: User = {
		name: "Astrodev",
		balance: 50
	}

	const result = performPurchase(user, 50)
	
	expect(result).toEqual({
		...user,
		balance: 0
	})
})

//c)
test("Testing balance smaller than value", () => {
	const user: User = {
		name: "Astrodev",
		balance: 30
	}

	const result = performPurchase(user, 50)
	
	expect(result).not.toBeDefined()
})