

export default (objRep) => {
    const {bistroModel, db, uuidv4}=objRep
    return (req, res ,next) => {
        if(typeof req.body.name == "undefined" || typeof req.body.city == "undefined"){
            //error case
            return res.status(400).json({error: "Missing title or author"})
        }
        const newBistro = {
            id: uuidv4(),
            name: req.body.name,
            city: req.body.city,
        }
        bistroModel.insert(newBistro)
        return db.saveDatabase((err)=>{
            res.locals.bistro = newBistro;
            return next()
        });
        /*return res.json({
            id: newBistro.id,
            name: newBistro.name,
            city: newBistro.city
        })*/
       
    }
    
}
