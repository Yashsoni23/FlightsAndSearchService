const {FlightService} = require("../services/index");

const flightService = new FlightService();

const create = async (req,res)=>{
    try {
        const flight = await flightService.createFlight(req.body);
        return res.status(201).json({
            data: flight,
            sucess:true,
            err:{},
            message:"Successfully created a flight"
        })
    } catch (error) {
        console.log(error)
        return res.json({
            data:{},
            sucess:false,
            message:"Not able to create flight",
            err:error
        })
    }
}
const getAll = async (req,res)=>{
    try {
        const responce = await flightService.getAllFlightData(req.query);
        return res.status(201).json({
            data: responce,
            sucess:true,
            err:{},
            message:"Successfully fathced a flights"
        })
    } catch (error) {
        return res.json({
            data:{},
            sucess:false,
            message:"Not able to fatch the flights",
            err:error
        })
    }
}
module.exports = {
    create,
    getAll
}