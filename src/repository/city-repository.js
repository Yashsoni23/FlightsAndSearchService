const { City } = require("../models/index")
const {Op} =require("sequelize"); 

class CityRepository {

    async createCity({name}) {
        try {
            const city = await City.create({
                name,
            });
            return city;

        } catch (error) {
            console.log("Something like wrong");
            throw error;
        }
    }

    async deleteCity(cityid) {
        try {
            await City.destroy({
                where: {
                    id:cityid
                }
            })
            return true;
        } catch (error) {
            console.log("something went wrong in this repository layer");
            throw {error}
        }
    }

    async updateCity(cityid,data) {
        try {

            
            // The below method alos works but will not returning updated data


            // const city = await City.update(data,{
            //     where:{
            //         id:cityid
            //     }
            // })
            // return city;


            // Because Returning true only woring in PostGresQL database
            // The below method alos works but will returning updated data


            const city = await City.findByPk(cityid);
            city.name = data.name;
            await city.save()
            return city;

        } catch (error) {
            console.log("something went wrong in this repository layer");
            throw {error}
        }
    }
    async getCity(cityid) {
        try {
            const city = await City.findByPk(cityid)
            return city;
        } catch (error) {
            console.log("Something went wrong")
            throw error
        }
    }
    async getAllCities(filter){
        try {
            if(filter.name){
                const city = await City.findAll({
                    where:{
                        name:{
                            [Op.startsWith]: filter.name
                        }
                    }
                });
            return city;

            }
            const cities = await City.findAll()
            return cities;
           
        } catch (error) {
            console.log("Something went wrong")
            throw error
        }
    }
}

module.exports = CityRepository;