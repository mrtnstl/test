import express from "express"
import { fileURLToPath } from "url"
import path from "path"
//import fs from "fs"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const app = express();

app.use(express.static(path.join(__dirname, "dist")))


app.get("/", (req,res)=> {
    res.sendFile((__dirname, "dist", "/index.html"))
})
app.get("/bistros", (req, res) =>{
    res.sendFile(path.join(__dirname, "dist", "/bistros.html"))
})
app.post("/bistros", (req, res) => {

})
app.delete("/bistros", (req, res) => {

})
app.put("/bistros", (req, res) => {

})



app.listen(3000, ()=> {
    console.log("Listening on port 3000")
})