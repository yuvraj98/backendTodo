

const express = require('express');
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 4000

// middleware
app.use(express.json());

// importing routes
const todoRoutes = require("./routes/todos")

app.use("/api/v1", todoRoutes);

app.listen(PORT, () => {
    console.log(`Server started Sucessfully at ${PORT}`);
    
})

// conection to the database

const dbConnect = require("./config/database")
dbConnect();

app.get("/", (req,res) => {
    res.send(`<h1>This is A Home Page</h1>`)
})