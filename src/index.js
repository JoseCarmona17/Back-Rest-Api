import app from "./app.js";
import {connectBD} from "./db.js";

connectBD();
app.listen(3000);
console.log("Servidor on port", 3000);