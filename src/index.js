require("dotenv").config();
const express = require("express");
const cors = require("cors");
const port = process.env.PORT || 3001;
const app = express();
const userRoute = require("./routes/users.route");
const authRoute = require("./routes/auth.route");
const charactersRoute = require("./routes/characters.route");
const swaggerRoute = require("../swagger/swagger.route");
const dbConnection = require("./database/db");

app.use(express.json());
app.use(cors());

app.use("/users", userRoute);
app.use("/auth", authRoute);
app.use("/characters", charactersRoute);
app.use("/api-docs", swaggerRoute);

dbConnection();

app.listen(port, () => console.log(`Listening on http://localhost:${port}`));
