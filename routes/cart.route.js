import { Router } from "express";
import { CartController } from "../controllers/cart.controller";

import { Middlewares } from "../middlewares/auth.middleware";

export const CartRoute = Router();
CartRoute.get("/", Middlewares.authenticate, CartController.getCart);
