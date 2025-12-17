import { config } from "dotenv";
import jwt from "jsonwebtoken";
config();
const JWT_SECRET = process.env.JWT_SECRET;
export const JWT = {
    //    input: user -> output: token
    sign: async (user) => {
        try {
            const token = await jwt.sign(user, JWT_SECRET);
            return token;
        } catch (error) {
            throw error;
        }
    },
    //input: token -> output: user
    decode: (token) => {
        try {
            const user = jwt.decode(token, JWT_SECRET);
            return user;
        } catch (error) {
            throw error;
        }
    },
};
