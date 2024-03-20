"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./server");
const user_routes_1 = require("./routers/user.routes");
const conection_1 = require("./database/conection");
const product_routes_1 = require("./routers/product.routes");
const auth_routes_1 = require("./routers/auth.routes");
const order_routes_1 = require("./routers/order.routes");
(0, conection_1.connect)();
//routers
server_1.app.use("/HC", user_routes_1.router);
server_1.app.use("/HC", product_routes_1.router);
server_1.app.use("/HC", auth_routes_1.authRouter);
server_1.app.use("/HC", order_routes_1.routerOrder);
exports.default = server_1.app;
