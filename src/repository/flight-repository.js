const { Flights } = require("../models/index");
const { Op } = require("sequelize");
class FlightRepository {

    #createFilter(data) {
        let filter = {};
        let priceFilter = [];
        if (data.arrivalAirportId) {
            filter.arrivalAirportId = data.arrivalAirportId;
        }
        if (data.dipartureAirportId) {
            filter.dipartureAirportId = data.dipartureAirportId;
        }
        if (data.minPrice) {
            priceFilter.push({ [Op.gte]: data.minPrice });
        }
        if (data.maxPrice) {
            priceFilter.push({ [Op.lte]: data.maxPrice })
        }
        Object.assign(filter, {
            price: {
                [Op.and]: priceFilter
            }
        })
        console.log(filter);
        return filter;
    }

    async createFlight(data) {
        try {
            const flight = await Flights.create(data);
            return flight;
        } catch (error) {
            console.log("Someting wanr wrong in side the Repository side");
            throw { error }
        }
    }
    async getFlight(id) {
        try {
            const flight = await Flights.findByPk(id);
            return flight;
        } catch (error) {
            console.log("Someting wanr wrong in side the Repository side");
            throw { error }
        }
    }
    async getAllFlight(filter) {
        try {
            const filterObject = this.#createFilter(filter);
            const flights = await Flights.findAll({
                where: filterObject
            });
            console.log(filterObject);
            return flights;
        } catch (error) {
            console.log("Someting wanr wrong in side the Repository side");
            throw { error }
        }
    }
}
module.exports = FlightRepository;