import { JWT } from "../lib/jwt";
import { prisma } from "../lib/prisma";
import { hash, compare } from "bcryptjs";
/*
 1. proper table deceletarion
 2. hasing the password
 3. checking corner cases and validation 
 */
export const AuthController = {
    register: async (req, res) => {
        try {
            const body = req.body;

            const exists = await prisma.user.findFirst({
                where: {
                    email: body.email,
                },
            });
            if (exists) {
                return res.status(400).json({ message: "User already exists" });
            }

            const hashedPassword = await hash(body.password, 10);

            const user = await prisma.user.create({
                data: {
                    email: body.email,
                    password: hashedPassword,
                },
                select: {
                    id: true,
                    email: true,
                },
            });
            const token = await JWT.sign(user);

            return res.status(201).json({ message: "User created", token: token });
        } catch (error) {
            return res.status(400).json({ message: "Auth error" });
        }
    },
    login: async (req, res) => {
        try {
            const body = req.body;

            const user = await prisma.user.findFirst({
                where: {
                    email: body.email,
                },
                select: {
                    id: true,
                    email: true,
                    password: true,
                },
            });
            //existance verification
            if (!user) {
                return res.status(400).json({ message: "User does not exist" });
            }
            const isPasswordCorrect = await compare(body.password, user.password);
            //password matching
            if (!isPasswordCorrect) {
                return res.status(400).json({ message: "User Unauthorised" });
            }
            //all is verified
            delete user.password;
            const token = await JWT.sign(user);

            return res.status(200).json({ message: "User Logged in", token: token });
        } catch (error) {
            res.status(400).json({ message: "Auth error" });
        }
    },
};
