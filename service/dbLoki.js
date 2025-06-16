import loki from "lokijs"
const db = new loki("test.db")

export function initDb(callback){
    db.loadDatabase({}, err => {
        if(err){
            return callback(err)
        }
        let bistroModel = db.getCollection("bistros")
        if(bistroModel === null){
            bistroModel = db.addCollection("bistros")
            
        }
        console.log(bistroModel)
        db.saveDatabase(err => {
            callback(err,{db, bistroModel})
        })
        
    })

}
