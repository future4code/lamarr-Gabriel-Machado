import { app } from "./app"
import { PingController } from "./controller/PingController"
import { UserController } from "./controller/UserController"

const userController = new UserController()
const pingController = new PingController()

app.get("/ping", pingController.ping)

app.get("/users", userController.getAllUsers)

app.post("/createUser", UserController.createUser)

app.delete("/deleteUser/:id", userController.deleteUser)