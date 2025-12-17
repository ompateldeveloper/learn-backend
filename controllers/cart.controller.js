import { prisma } from "../lib/prisma";

export const CartController = {
    getCart: async (req, res) => {
        try {
            const user = req.user;
            
            console.log(user);

            const items = [];
            return res.json({ data: items });
        } catch (error) {}
    },
};
