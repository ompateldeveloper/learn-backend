import z from "zod";
import { createValidator } from "../lib/validate.js";
import { describe } from "zod/v4/core";

const product = z.object({
    name: z.string().min(1, "name is short").max(50, "name is large"),
    price: z.string().min(1, "too cheap").max(4, "very costly"),
    description: z.string(),
});

const productValidators = {
    createProductValidator: createValidator(product),
};

export { product, productValidators };
