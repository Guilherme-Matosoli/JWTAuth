import { Router } from "express";

import { authMiddleware } from "./middlewares/authMiddleware";
import { CreateUserController }  from "./controllers/CreateUserController";
import { LoginUserController } from "./controllers/LoginUserController";


const routes = Router();

routes.post('/user', new CreateUserController().create);
routes.post('/login', new LoginUserController().login);
routes.get('/profile', authMiddleware , new LoginUserController().getProfile);

export default routes;