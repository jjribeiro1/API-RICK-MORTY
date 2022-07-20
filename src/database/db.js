const mongoose = require("mongoose");

const dbConnection = () => {
  mongoose
    .connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("Connected to mongoDB"))
    .catch((err) => console.log(`Database connection error: ${err.message}`));
};

module.exports = dbConnection;
