const { FlightService } = require("../services/index");
const { SuccessCodes } = require("../utils/error-codes");

const flightService = new FlightService();

const create = async (req, res) => {
    try {
        const { flightNumber, airplaneId, departureAirportId, arrivalAirportId, arrivalTime, departureTime, price } = req.body;
        const flightRequestData = {
            flightNumber:flightNumber,
            airplaneId:airplaneId,
            departureAirportId:departureAirportId,
            arrivalAirportId:arrivalAirportId,
            arrivalTime:arrivalTime,
            departureTime:departureTime,
            price:price
        }

        const flight = await flightService.createFlight(flightRequestData);
        return res.status(SuccessCodes.CREATED).json({
            data: flight,
            sucess: true,
            err: {},
            message: "Successfully created a flight"
        })
    } catch (error) {
        console.log(error)
        return res.json({
            data: {},
            sucess: false,
            message: "Not able to create flight",
            err: error
        })
    }
}
const getAll = async (req, res) => {
    try {
        const responce = await flightService.getAllFlightData(req.query);
        return res.status(SuccessCodes.OK).json({
            data: responce,
            sucess: true,
            err: {},
            message: "Successfully fathced a flights"
        })
    } catch (error) {
        return res.json({
            data: {},
            sucess: false,
            message: "Not able to fatch the flights",
            err: error
        })
    }
}
module.exports = {
    create,
    getAll
}