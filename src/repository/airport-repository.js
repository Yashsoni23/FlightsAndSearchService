const CrudRepository = require("./crud-repository");
const {Airport} = require("../models/index")
class AirplaneRepository extends CrudRepository{
    constructor(){
        super(Airport);
    }
}

module.exports = AirplaneRepository;