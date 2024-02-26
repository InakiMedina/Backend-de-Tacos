const express = require("express");
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const router = require("./src/routes");

const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");

const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "Express API for Backend de Tacos",
    version: "1.0.0",
    description: "This is a REST API application for handling restaurant operations"
  },
  servers: [
    {
        url: 'http://localhost:3000',
        description:'Development server'
    }
  ],
  components: {}
};

const options = {
    swaggerDefinition,
    // Paths to files containing OpenAPI definitions
    apis: ['./src/routes/*.js'],
  };
  
const swaggerSpec = swaggerJSDoc(options);

dotenv.config();

console.log("PORT=" + process.env.PORT);

const app = express();

app.use(cors());

const port = process.env.PORT || 3000;

app.use(router);

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

//Connect to MongoDB
mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");

    //Start the application
    app.listen(port, () => {
      console.log(`App running in port ${port}`);
    });
  })
  .catch((err) => {
    console.log("Failed to connect to MongoDB: ", err);
  });

app.get("", (req, res) => {
  console.log("Get to INDEX succesfull");
  res.send("API works!");
});
