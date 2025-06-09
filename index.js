import express from "express"
import { fileURLToPath } from "url"
import path from "path"
//import fs from "fs"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const app = express();

app.use(express.static(path.join(__dirname, "dist")))

const bistros = [
    {
        "id": "FB01",
        "name": "Forest Bite",
        "short_description": "",
        "city": "Budapest",
        "price_range": 2,
        "has_open_space": true,
        "service_type": "restaurant",
        "logo": "./pics/bistros/forestbite/logo.svg",
        "banner": "./pics/bistros/forestbite/banner.webp",
        "isVisible": false
    },
    {
        "id": "RB01",
        "name": "River Brew",
        "short_description": "",
        "city": "Szeged",
        "price_range": 1,
        "has_open_space": false,
        "service_type": "restaurant",
        "logo": "./pics/bistros/riverbrew/logo.svg",
        "banner": "./pics/bistros/riverbrew/banner.webp",
        "isVisible": false
    },
    {
        "id": "UP01",
        "name": "Urban Picnic",
        "short_description": "",
        "city": "Debrecen",
        "price_range": 3,
        "has_open_space": true,
        "service_type": "restaurant",
        "logo": "./pics/bistros/urbanpicnic/logo.svg",
        "banner": "./pics/bistros/urbanpicnic/banner.webp",
        "isVisible": false
    },
    {
        "id": "TGT01",
        "name": "The Garden Table",
        "short_description": "",
        "city": "Pécs",
        "price_range": 2,
        "has_open_space": true,
        "service_type": "restaurant",
        "logo": "./pics/bistros/thegardentable/logo.svg",
        "banner": "./pics/bistros/thegardentable/banner.webp",
        "isVisible": false
    },
    {
        "id": "CC01",
        "name": "Cozy Corner",
        "short_description": "",
        "city": "Győr",
        "price_range": 1,
        "has_open_space": false,
        "service_type": "restaurant",
        "logo": "./pics/bistros/cozycorner/logo.svg",
        "banner": "./pics/bistros/cozycorner/banner.webp",
        "isVisible": false
    }
]
const contacts = [
    {
        "id": "FB01",
        "phone": "+36 1 234 5678",
        "email": "info@forestbite.hu",
        "website": "https://forestbite.hu"
    },
    {
        "id": "RB01",
        "phone": "+36 62 987 6543",
        "email": "hello@riverbrew.hu",
        "website": ""
    },
    {
        "id": "UP01",
        "phone": "+36 52 111 2222",
        "email": "booking@urbanpicnic.hu",
        "website": "https://urbanpicnic.hu"
    },
    {
        "id": "TGT01",
        "phone": "+36 72 456 7890",
        "email": "info@gardentable.hu",
        "website": "https://gardentable.hu"
    },
    {
        "id": "CC01",
        "phone": "+36 96 234 1122",
        "email": "contact@cozycorner.hu",
        "website": ""
    }
]
app.get("/", (req,res)=> {
    res.sendFile((__dirname, "dist", "/index.html"))
})
app.get("/data", (req, res) =>{
    res.sendFile(path.join(__dirname, "dist", "/bistros.html"))
})

app.get("/bistros", (req, res) =>{
    res.json(bistros)
})
app.get("/bistroById/{id}", (req, res) => {

})
app.post("/bistros", (req, res) => {

})
app.delete("/bistros/{id}", (req, res) => {

})
app.put("/bistros/{id}", (req, res) => {

})
app.get("/contact/{id}", (req, res) =>{
    res.json(contacts)
})


app.listen(3000, ()=> {
    console.log("Listening on port 3000")
})