const {Flight} = require("../models/index");

class FlightRepository {
    async createFlight(data){
        try{
            const flight = await Flight.create(data);
            return flight;
        }catch(error){
            console.log("Someting wanr wrong in side the Repository side");
            throw {error}
        }
    }
}
module.exports = FlightRepository;