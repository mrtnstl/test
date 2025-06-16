export default (objRep) => {
    const {bistroModel} = objRep;
    return (req, res, next) => {
        const oneBistro = bistroModel.findOne({
            id: req.params.id
        });
        
        if(!oneBistro){
            return res.status(404).json({error: `Bistro with id ${req.params.id} can not be found`});
        }
        res.locals.bistro = oneBistro;
        return next();
    }

}