const {ClientErrorCodes}  =require('../utils/error-codes')

const validateCreateFlight = (req,res,next)=>{
    if(
        !req.body.flightNumber ||
        !req.body.airplaneId ||
        !req.body.departureAirportId ||
        !req.body.arrivalAirportId ||
        !req.body.arrivalTime ||
        !req.body.departureTime ||
        !req.body.price 
    ) {
        //if any of the body params is missing we come here
        return res.status(ClientErrorCodes.BAD_REQUEST).json({
            data:{},
            success :false,
            message: "invalid req body for create flight",
            err: "missing mandatory properties for create flight"
        })
    }

    next();
}

module.exports = {
    validateCreateFlight
}