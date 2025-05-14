// ? Import express js to use it.
const express = require("express");

// ? Which port the server will run on
const port = process.env.PORT || 3000;

// ? Import cors to connect this server with clients port
const cors = require("cors");

// ? create a express js app/instance
const app = express();

// *Middlewares
// ? use cors
app.use(cors());
// ? use express.json to access POST requests body
app.use(express.json());

// ? create a root api
app.get("/", (req, res) => {
    res.send("Server is running");
});

// ? connect the server with the port defined
app.listen(port, () => {
    console.log(`Server connected with port ${port}`);
});
