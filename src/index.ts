import dotenv from "dotenv";
import express, { Express } from "express";
import cors from "cors";
import { router } from "./router";

dotenv.config();

const app: Express = express();
const port = process.env.PORT ?? 3000;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(router);

/*app.listen(port, () => {
  console.log(`[server]: Server is running at http://10.0.2.32:${port}`);
});*/

app.listen(3002, '0.0.0.0', () => {
  console.log("Server running on port 3002");
});