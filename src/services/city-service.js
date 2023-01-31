const {CityRepository} = require("../repository/index");

class CityService {
    constructor(){
        this.cityRepository = new CityRepository();
    }
    async createCity(data){
        try {
            const city = await this.cityRepository.createCity(data);
            return city;
        } catch (error) {
         console.log("Something went wrong at service layer");   
            throw {error}
        }
    }
    async deleteCity(cityid){
        try {
            const responce  = await this.cityRepository.deleteCity(cityid);
            return responce;
        } catch (error) {
         console.log("Something went wrong at service layer");   
            throw {error}
        }
    }
    async updateCity(cityid,data){
        try {
            const city = await this.cityRepository.updateCity(cityid,data);
            return city;
        } catch (error) {
         console.log("Something went wrong at service layer");   
            throw {error}
        }
    }
    async getCity(cityid){
        try {
            const city  = await this.cityRepository.getCity(cityid);
            return city;
        } catch (error) {
         console.log("Something went wrong at service layer");   
            throw {error}
        }
    }
    async getAllCities(filter){
        try {
            const cities  = await this.cityRepository.getAllCities({name:filter.name});
            return cities;
        } catch (error) {
         console.log("Something went wrong at service layer");   
            throw {error}
        }
    }


}

module.exports = CityService;