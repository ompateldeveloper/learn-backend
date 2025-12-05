import { prisma } from "../lib/prisma";
import { product } from "../validators/product.validator.js";
export const ProductControllers = {
    getProducts: async (req, res) => {
        const data = await prisma.products.findMany({});
        return res.json({ data });
    },
    createProduct: async (req, res) => {
        const body = req.body;
        const createdProduct = await prisma.products.create({
            data: {
                name: body.name,
                price: body.price,
                description: body.description,
            },
        });
        return res.json({ data: createdProduct });
    },
    updateProduct: async (req, res) => {
        const params = req.params;

        const body = req.body;
        const updatedProduct = await prisma.products.update({
            where: {
                id: params.pid,
            },
            data: {
                ...body,
            },
        });

        return res.json({ data: updatedProduct });
    },
    //           from frontend  to frontend
    deleteProducts: async (req, res) => {
        const params = req.params;
        const deletedProduct = await prisma.products.delete({
            where: {
                id: params.pid,
            },
        });
        return res.json({ data: deletedProduct });
    },
};

/*
    getThings: 
    - findMany
    - pagination: req.query.page, re.query.limit
    createThing:
    - prisma.create
    - validator(beforehand in route)
    - body: req.body
    updateThing:
    - prisma.update + prisma.findUnique/prisma.findFirst
    - params: req.params
    - body: req.body
    deleteThings:
    - prisma.delete
    - params: req.params

 */

/*
    res :backend-> frontend
    req :frontend-> backend

    backend is like a tree
*/