const express = require("express");
const bodyParser = require("body-parser");
const {PORT} = require("./config/serverConfig")
const CityRepository = require("../src/repository/city-repository")
const setUpAndStartServer = async ()=>{

    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
    
    app.listen(PORT,()=>{
    
        console.log(`Server Started at ${PORT}`);
        const repo = new CityRepository();
        repo.deleteCity(6)
    })
   

}

setUpAndStartServer();