# Welcome to Flights Service

## Project Setup

- clone the project on your local 
- Execute `npm install` on the same path as of your root directory of the downloaded project
- Create a `.env` file in the root directory and add the following environmental variable 
    -  `PORT=3000`
- INSIDE THE `src/config` folder create a new file `config.json` and the add the following piece of code 


````
{

  "development": {
    "username": <YOUR_DB_USERNAME>,
    "password": <YOUR_DB_PASSWORD>
    "database": "Flights_Search_DB_DEV",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }

}
````

- Once you've added your db congig as listed above,go to the src folder from your terminal and execute `npx sequelize db:create`

