const {FlightRepository,AirplaneRepository} = require("../repository/index");

class FlightService{
    constructor(){
        this.airplaneRepository = new AirplaneRepository();
        this.flightRepository = new FlightRepository();
    }
    async createFlight(data){
        try{
           const airplane = await this.airplaneRepository.getAirplane(data.airplaneId);
            const flight = await this.flightRepository().createFlight({
                ...data,totalSeats:airplane.capasity
            });


           return flight;
        }catch(error){
            console.log("Someting wanr wrong in side the Service Layer side");
            throw {error}
        }
    }
    async getFlightData(){

    }
}

module.exports = FlightService