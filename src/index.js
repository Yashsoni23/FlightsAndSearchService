const express = require("express");

const bodyParser = require("body-parser");

const { PORT } = require("./config/serverConfig");

const ApiRoutes = require("./routes/index");

const { City, Airport } = require("./models/index");

const CityRepository = require("../src/repository/city-repository");
const db = require("./models/index");
const setUpAndStartServer = async () => {

    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use('/api', ApiRoutes);

    app.listen(PORT, async () => {
        console.log(`Server Started at ${PORT}`);
        db.sequelize.sync({alert:true});

        const city = await City.findAll({
            where:{id:15},
            include:[{model:Airport}]
        })
       await city.getAirports();
        // const Cite = await city.getAirport();
    })

}

setUpAndStartServer();