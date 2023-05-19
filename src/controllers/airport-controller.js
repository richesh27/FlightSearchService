const {AirportService} = require('../services/index');

const airportService = new AirportService();

const create = async (req,res)=>{
    try {
        const airport = await airportService.create(req.body);
        return res.status(201).json({
            data : airport,
            success :true,
            err: {},
            message : "Successfullly created a airport"
        })
    } 
    catch (error) {
        console.log("Something went wrong in the airport controller layer");
        return res.status(500).json({
            data: {},
            success: false,
            err: error,
            message: "Cannot create a airport"
        })
    }
}

module.exports = {
    create
}