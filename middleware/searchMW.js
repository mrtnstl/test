export default (objRep) => {
    const {bistroModel}=objRep
    return (req,res, next)=> {
        if(typeof req.body.search == "undefined"){
            return res.status(400).json({error: "Missing search"})
        }
        const s = req.body.search
        const allBistro = bistroModel.find()

        return res.json(allBistro.filter(e => e.name.includes(s) || e.city.includes(s)))
    }

}
