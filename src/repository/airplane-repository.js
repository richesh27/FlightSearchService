const {Airplane} = require ('../models/index');

class AirplaneRepository {

    async getAirplanes( id){
        try {
            const airplanes = await Airplane.findByPk(id);
            return airplanes;
        } 
        catch (error) {
            console.log("Something went wrong in repository layer")
            throw { error };
        }
    }
}

module.exports = AirplaneRepository;