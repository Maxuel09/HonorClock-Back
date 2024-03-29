import { app } from "./server";
import { router as user } from "./routers/user.routes";
import { connect } from "./database/conection";
import { router as product } from "./routers/product.routes";
import { authRouter } from "./routers/auth.routes";
import { routerOrder } from "./routers/order.routes";


connect();
//routers
app.use("/HC", user);
app.use("/HC", product)
app.use("/HC", authRouter)
app.use("/HC", routerOrder)

export default app
