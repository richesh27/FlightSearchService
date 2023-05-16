const city = require("../models/city");
const { City } = require("../models/index");

class cityRepository {
    async createCity({ name }) {
        try {
            const city = await City.create({ name });
            return city;
        } 
        catch (error) {
            throw { error };
        }
    }

    async deleteCity({ cityId }) {
        try {
            await City.destroy({
                where: {        //whereClause 
                id: cityId,
                },
            });
            return true;
        } 
        catch (error) {
            throw { error };
        }
    }

    async updateCity(cityId, data) {
        try {
            const city = await City.update(data, {
                where: {
                    id:cityId
                }
            });
            return city;
        } 
        catch (error) {
            throw { error };
        }
    }

    async getCity ( cityId ) {
        try {
            const city = await City.findByPk(cityId);           // find by primary key
            return city;
        } 
        catch (error) {
            throw { error };
        }
    }
}

module.exports = cityRepository;