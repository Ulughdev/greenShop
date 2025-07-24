import express from "express";
import adminController from "./controllers/admin.controller";
const routerAdmin = express.Router();

/** ADMIN router */
routerAdmin.get("/", adminController.goHome);

routerAdmin.get("/login", adminController.getLogin);
routerAdmin.post("/login/process", adminController.processLogin);

routerAdmin.get("/signup", adminController.getSignup);
routerAdmin.post("/signup/process", adminController.processSignup);

/** Product */
/** User */

export default routerAdmin;
