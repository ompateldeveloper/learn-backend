import { JWT } from "../lib/jwt";
import { prisma } from "../lib/prisma";

export const Middlewares = {
    authenticate: async (req, res, next) => {
        try {
            const headers = req.headers;
            if (!headers.authorization) {
                return res.status(401).json({ message: "No token provided" });
            }

            const token = headers.authorization?.split(" ")[1];
            const user = JWT.decode(token);

            if (!user) {
                return res.status(401).json({ message: "No User Found" });
            }

            const userExists = await prisma.user.findUnique({
                where: {
                    id: user.id,
                },
            });
            if (!userExists) {
                return res.status(401).json({ message: "User Is not valid" });
            }

            req.user = userExists;

            next();
        } catch (error) {
            return res.status(400).json({ error, message: "Unexpected error" });
        }
    },
};
