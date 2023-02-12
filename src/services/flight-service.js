const {FlightRepository,AirplaneRepository} = require("../repository/index");
const compareTime= require("../utils/helper") 
class FlightService{
    constructor(){
        this.airplaneRepository = new AirplaneRepository();
        this.flightRepository = new FlightRepository();
    }
    async createFlight(data){
        try{
            if(!compareTime(data.arrivalTime,data.departureTime)){
                throw {error : "Arrival time is cannot be less than departure time!!"}
            }
           const airplane = await this.airplaneRepository.getAirplane(data.airplaneId);
            const flight = await this.flightRepository.createFlight({
                ...data,totalSeats:airplane.capasity
            });

           return flight;
        }catch(error){
            console.log("Someting wanr wrong in side the Service Layer side");
            throw {error}
        }
    }
    async getAllFlightData(data){
        try {
            const flights = await this.flightRepository.getAllFlight(data);
            return flights;
        } catch (error) {
            console.log("Someting wanr wrong in side the Service Layer side");
            throw {error}
        }
    }
}

module.exports = FlightService