import { app } from "./app"
import { userRouter } from "./routes/userRouter"
import { movieRouter } from "./routes/movieRouter"

app.use("/user", userRouter)
app.use("/movie", movieRouter)