const city = require("../models/city");
const { City } = require("../models/index");

const { Op } = require('sequelize');

class cityRepository {
    async createCity({ name }) {
        try {
            const city = await City.create({ name });
            return city;
        } 
        catch (error) {
            console.log("Something went wrong in repository layer")
            throw { error };
        }
    }

    async deleteCity( cityId ) {
        try {
            await City.destroy({
                where: {        //whereClause 
                id: cityId
                }
            });
            return true;
        } 
        catch (error) {
            console.log("Something went wrong in repository layer")
            throw { error };
        }
    }

    async updateCity(cityId, data) {
        try {
            // below thing also works but not returns updated object , only works in PGSQL,  hence to get updated data, we do as follows

            // const city = await City.update(data, {
            //     where: {
            //         id:cityId
            //     },
                    // returning: true.valueOf,
                    // plain:true
            // });
            const city = await City.findByPk(cityId);
            city.name = data.name;
            await city.save();
            return city;
        } 
        catch (error) {
            console.log("Something went wrong in repository layer")
            throw { error };
        }
    }

    async getCity ( cityId ) {
        try {
            const city = await City.findByPk(cityId);           // find by primary key
            return city;
        } 
        catch (error) {
            console.log("Something went wrong in repository layer")
            throw { error };
        }
    }

    async getAllCities (filter) {   // filter can be empty also
        try {
            if(filter.name) {       // get the filter from query-params 
                const cities  = await City.findAll({
                    where: {
                        name : {
                            [Op.startsWith] : filter.name
                        }

                    }
                })
                return cities;
            }
            const cities = await City.findAll();
            return cities;    
        } 
        catch (error) {
            console.log("Something went wrong in repository layer")
            throw { error };
        }
    }
}

module.exports = cityRepository;