import { app } from "./server";
import { router } from "./routers/user.routes";
import { connect } from "./database/conection";


connect();
//routers

app.use("/HC", router);