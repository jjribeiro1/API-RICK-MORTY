require("dotenv").config();
const express = require('express');
const cors = require('cors');
const port = process.env.PORT || 3001;
const app = express();
const dbConnection = require('./database/db');

app.use(express.json());
app.use(cors());

dbConnection();

app.listen(port, () => console.log(`Listening on http://localhost:${port}`));