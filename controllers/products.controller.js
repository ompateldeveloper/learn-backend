import { PrismaClient } from "@prisma/client";

export const ProductControllers = {
    getProducts: async (req, res) => {
        const prisma = new PrismaClient();
        const users = await prisma.user.findMany();
        res.json({ users });
    },
    createProduct: () => {},
    updateProduct: () => {},
    deleteProducts: () => {},
};
