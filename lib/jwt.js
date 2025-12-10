import { config } from "dotenv";
import jwt from "jsonwebtoken";
config();
const JWT_SECRET = process.env.JWT_SECRET;
export const JWT = {
    sign: async (data) => {
        try {
            const token = await jwt.sign(data, JWT_SECRET);
            return token;
        } catch (error) {
            throw error;
        }
    },
    verify: () => {},
};
