const Express = require("express");
const dotenv = require("dotenv");
const app = Express();
const UserRouter = require("./app/user/router");

dotenv.config();

const port = process.env.PORT;

app.use(Express.json());

app.use("/api/user", UserRouter);

app.listen(port, () =>
  console.log(`Server is running successfully on ${port}`)
);
