import express from "express";
import cors from "cors";
import { productRoute } from "./routes/products.route.js";
import { config } from "dotenv";
import { authRouter } from "./routes/auth.route.js";
config();
const app = express();
/*
read  -- get -- to give data
create -- post -- to get/give data
update -- put/patch -- to get/give data
delete -- delete -- no get data
checking -- options
-- 
*/

app.use(express.json());
const port = process.env.PORT;
// impure
const xyz = async () => {
    return db.query(`SELECT * FROM table`);
};
// pure
const abc = () => {
    return Math.random();
};

// app.use(cors({
//     origin:["http://localhost:5173/"]
// }))

app.get("/", async (req, res) => {
    return res.send("hello my world");
});

app.use("/auth", authRouter);
app.use("/products", productRoute);

app.listen(port || 8080, () => {
    console.log("server started");
});
