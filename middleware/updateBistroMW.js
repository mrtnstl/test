export default (objRep)=> {
    const {bistroModel, db}=objRep
    return (req,res,next) => {
        if(typeof req.body.name !== "undefined"){
            res.locals.bistro.name = req.body.name;
        }
        
        if(typeof req.body.city !== "undefined"){
            res.locals.bistro.city = req.body.city;
        }

        bistroModel.update(res.locals.bistro)
        db.saveDatabase(err=>{
            
            return next()

        })
    }
}
