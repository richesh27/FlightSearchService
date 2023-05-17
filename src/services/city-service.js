const { response } = require('express');
const { Cityrepository } = require('../repository/index');
// this helps us to get different repos in the repo folder
// we can access those respos by seperating them with comma in the require line

class CityService {
    constructor(){
        this.cityrepository = new Cityrepository();
    }

    async createCity (data) {
        try {
            const city = await this.cityrepository.createCity(data);
            return city;
        }
        catch (error) {
            console.log("Something went wrong in service layer");
            throw {error};
        }
    }
    
    async deleteCity (cityId) {
        try {
            const respose = await this.cityrepository.deleteCity(cityId);
            return response;
        } 
        catch (error) {
            console.log("Something went wrong in service layer");
            throw {error};
        }
    }
    
    async updateCity (cityId, data) {
        try {
            const city = await this.cityrepository.updateCity(cityId, data);
            return city;
        } 
        catch (error) {
            console.log("Something went wrong in service layer");
            throw {error};
        }
    }

    async getCity (cityId) {
        try {
            const city = await this.cityrepository.getCity(cityId);
            return city;
        } catch (error) {
            console.log("Something went wrong in service layer");
            throw {error};
        }
    }
    
}
module.exports = CityService; 