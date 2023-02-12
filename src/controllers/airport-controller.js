const {AirportService} = require("../services/index");
const airportService = new AirportService();
const create = async (req,res)=>{
    try {
        const responce = await airportService.create(req.body);
        console.log(responce);
        return res.json({
            message:"Successfully Created the Airport",
            err:{},
            data: responce,
            sucess:true
        })
    } catch (error) {
        console.log(error)
        return res.json({
            data:{},
            sucess:false,
            message:"Not able to create New Airport",
            err:error
        })
    }
}

module.exports = {
    create,

}