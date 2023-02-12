const {ClientCodes} = require("../utils/error-codes")

const validateCreateFlight = (req, res, next) => {
    const { flightNumber, airplaneId, departureAirportId, arrivalAirportId, arrivalTime, departureTime, price } = req.body;
    if (
        !flightNumber ||
        !airplaneId ||
        !departureAirportId ||
        !arrivalAirportId ||
        !arrivalTime ||
        !departureTime ||
        !price
    ) {
        return res.status(ClientCodes.BAD_REQUEST).json({
            data: {},
            success: false,
            message: "Invalid body Create for create flight",
            err: "Missing mandatory properties to create flight"
        })
    }

    next();

}

module.exports =    validateCreateFlight
