import { app } from "./server";
import { router as user } from "./routers/user.routers";
import { connect } from "./database/conection";
import { router as product } from "./routers/product.routers";

connect();
//routers

app.use("/HC", user);
app.use("/HC", product)

export default app