export default (objRep)=>{
    const {bistroModel, db}=objRep
    return (req,res,next) => {
        const deletedBistro = res.locals.bistro;
        bistroModel.remove(deletedBistro)
        db.saveDatabase(err => {
            res.locals.bistro = deletedBistro
            return next()

        })
    }

}