import express from "express"
import { fileURLToPath } from "url"
import path from "path"
//import fs from "fs"

import addRoutes from "./route/index.js";
import { initDb as initLokiDb } from "./service/dbLoki.js";



const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const app = express();


app.use(express.json())
app.use(express.urlencoded())
app.use(express.static(path.join(__dirname, "dist")))

app.set("view engine", "ejs");


//app.get()//need wildcard route -> 404

initLokiDb((err,{db, bistroModel}) => {
  if(err) return console.error(err)

  addRoutes(app, db, bistroModel)
  app.listen(3000, ()=> {
    console.log("Listening on port 3000")
  })
})
