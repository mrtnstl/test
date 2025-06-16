export default (objRep) => {
    const {bistroModel} = objRep
    return (req, res, next) => {
        res.locals.bistros = bistroModel.find()
        return next();
        //return res.json(allBistros)
    }

}
