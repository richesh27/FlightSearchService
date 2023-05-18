const {FlightRepository, AirplaneRepository} = require('../repository/index');

const {compareTime} = require('../utils/helper')

class FlightService {

    constructor () {
        this.airplaneRepository = new AirplaneRepository();
        this.flightRepository = new FlightRepository();
    }

    async createFlight(data){
        try {
            if(!compareTime(data.arrivalTime, data.departureTime)) {
                throw {error : "Arrival time cannot be less then departure time"};
            }
            const airplane = await this.airplaneRepository.getAirplanes(data.airplaneId);
            const flight = await this.flightRepository.createFlight({...data , totalSeats:airplane.capacity});
            return flight;

        } catch (error) {
            console.log("Something went wrong in flight service layer");
            throw {error};
        }
    }

    async getFlightData(){
        //todo
    }
}

module.exports = FlightService;