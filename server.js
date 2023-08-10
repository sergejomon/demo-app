const express = require("express");
const connectDb = require("./config/db");

const app = express();
const port = 8080;
const carRoutes = require("./controllers/car.controller");

try {
    // Connect to the database
    connectDb.authenticate()
        .then(() => {
            console.log('Connection has been established successfully.');

            // Sync the Sequelize models with the database
            return connectDb.sync();
        })
        .then(() => {
            console.log('Database synced.');

            // Start the server
            app.listen(port, () => console.log("Listening on port:", port));
        })
        .catch(error => {
            console.error('Error:', error);
        });
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

app.use(express.json());
app.use("/car", carRoutes);