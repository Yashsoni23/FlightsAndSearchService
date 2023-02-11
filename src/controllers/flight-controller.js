const {FlightService, FlightService} = require("../services/index");

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

module.exports = {
    create
}