import { Router} from "express";
import UserControllers from "../controllers/UserControllers";

const routes = Router()

routes.get("/users", UserControllers.index)

export default routes
