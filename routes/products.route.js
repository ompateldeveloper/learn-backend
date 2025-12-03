import { Router } from "express";
import { ProductControllers } from "../controllers/products.controller.js";
const productRoute = Router();

productRoute.get("/", ProductControllers.getProducts);
productRoute.post("/", ProductControllers.createProduct);
productRoute.put("/", ProductControllers.updateProduct);
productRoute.delete("/", ProductControllers.deleteProducts);

export { productRoute };
