const express = require("express");

const app = express();
app.use(express.json());

app.get("/", (req, res)=>{
    console.log(req.body);
    res.status(200).send("Welcome to express Server")
})

app.get("/login", (req, res)=>{
    console.log(req.body)
    res.status(200).send("Welcome to Login page via express server")
})

app.post("/signup", (req, res)=>{
    console.log(req.body);
    res.status(200).send(req.body)
})

app.post("/cart",(req, res)=>{
    console.log(req.body);
    res.status(200).send(req.body)
})
app.post("/login", (req, res)=>{
    console.log(req.body);
    res.status(200).send(req.body)
})

const port = 8090;
app.listen(port,()=>{
    console.log(`Express Server is listing on port http://localhost:${port}`);
})