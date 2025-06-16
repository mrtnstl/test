import {v4 as uuidv4} from "uuid"

import createBistroMW from "../middleware/createBistroMW.js";
import deleteBistroMW from "../middleware/deleteBistroMW.js";
import getBistroMW from "../middleware/getBistroMW.js";
import getBistrosMW from "../middleware/getBistrosMW.js";
import searchMW from "../middleware/searchMW.js";
import updateBistroMW from "../middleware/updateBistroMW.js";
import renderMW from "../middleware/renderMW.js";

export default function addRoutes(app, db, bistroModel) {
  const objRep = {
    bistroModel,
    db,
    uuidv4
  };

  //API
  app.get("/api/bistros", 
    getBistrosMW(objRep), 
  (req, res)=>{res.json(res.locals.bistros)
  });
  app.get("/api/bistros/:id", 
    getBistroMW(objRep), 
  (req, res) => {res.json(res.locals.bistro);
  });
  app.post("/api/bistros", 
    createBistroMW(objRep),
  (req, res)=>{res.json(res.locals.bistro)});
  app.delete("/api/bistros/:id", 
    getBistroMW(objRep), 
    deleteBistroMW(objRep), 
  (req, res)=>{res.json(res.locals.bistro)
  });
  app.put("/api/bistros/:id", 
    getBistroMW(objRep), 
    updateBistroMW(objRep), 
  (req,res)=>{res.json(res.locals.bistro)
  });
  /*app.get("/api/contact/:id", (req, res) => {
    contacts.map((item) => {
      if (item.id === req.params.id) {
        res.json(item);
      }
    });
    res.status(404).json({ ERROR: "Resource not fund" });
  });*/
  app.post("/search", 
    searchMW(objRep));

  //APP
  app.get("/", 
    getBistrosMW(objRep), 
    renderMW(objRep, "index"));
  app.get("/createbistro",
    renderMW(objRep, "editBistro"));
  app.post("/createbistro", 
    createBistroMW(objRep), 
    (req, res) => {res.redirect("/")
  });
  app.get("/editbistro/:id", 
    getBistroMW(objRep), 
    renderMW(objRep, "editBistro"));
  app.post("/editbistro/:id", 
    getBistroMW(objRep), 
    updateBistroMW(objRep),
    (req, res, next)=>{res.redirect("/")
  });
  app.get("/deletebistro/:id", 
    getBistroMW(objRep), 
    deleteBistroMW(objRep), 
    (req, res, next)=>{res.redirect("/")
  });
  
}
