import { Router } from "express";
import { ProductControllers } from "../controllers/products.controller.js";
import { productValidators } from "../validators/product.validator.js";
const productRoute = Router();

productRoute.get("/", ProductControllers.getProducts);
productRoute.post("/", productValidators.createProductValidator, ProductControllers.createProduct);
productRoute.put("/:pid", ProductControllers.updateProduct);
productRoute.delete("/", ProductControllers.deleteProducts);

export { productRoute };
