import express from "express";
import cors from "cors";
import { productRoute } from "./routes/products.route.js";
import { config } from "dotenv";
config();
const app = express();
/*
read  -- get
create -- post
update -- put/patch
delete -- delete
checking -- options
-- 
*/

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

app.use("/products", productRoute);

app.listen(port || 8080, () => {
    console.log("server started");
});
