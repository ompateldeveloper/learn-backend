import z from "zod";

export const createValidator = (schema) => {
    return (req, res, next) => {
        try {
            req.body = schema.parse(req.body);
            next();
        } catch (error) {
            return res.json({ message: "Validation Error", error });
        }
    };
};
