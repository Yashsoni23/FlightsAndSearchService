const {Airplane} = require("../models/index")

class AirplaneReporitory{
    async getAirplane(id){
        try{
            const airplane = await Airplane.findByPk(id);
            return airplane;
        }catch(error){
            console.log("Someting wanr wrong in side the Repository side");
            throw {error}
        }
    }
}
module.exports = AirplaneReporitory;