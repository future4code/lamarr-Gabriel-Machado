import { app } from "./app";
import { getAllUsers } from "./endpoints/getAllUsers";
import { getUserPage } from "./endpoints/getUserPage";
import { getAll } from "./endpoints/getAll";

app.get("/todosusuarios", getAllUsers);
app.get("/usuarios", getUserPage);
app.get("/usuariosfiltrofinal", getAll);