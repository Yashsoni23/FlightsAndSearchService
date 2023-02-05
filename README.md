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

- Once you've added your db congig as listed above,go to the src folder from your terminal and execute `npx sequelize db:create` and then execute `npx sequelize db:migrate`

## DB Design
    - Airplane Table
    - Flight 
    - Airport
    - City
    
    - A Flight belongs to an one airplane but one airplane can be used in multiple flights
    - A city has many airports  but one airport belongs to a only one city
    - One airport can have many fligths, but a flight belongs to one aiport 

## Tables
### City ->id,name,created_at,updated_at
### Airport -> id,name,address,city_id,created_at,updated_at
  (Relationship->City has many airports and Airport belongs to a city (One to Many) )

  npx sequelize model:generate --name Airport --attributes name:String,address:String,cityId:Integer