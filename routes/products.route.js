import { Router } from "express";
const productRoute = Router();

productRoute.get("/", (req, res) => {
    res.send("GET:product");
});
productRoute.post("/", (req, res) => {});
productRoute.delete("/", (req, res) => {});

export { productRoute };
