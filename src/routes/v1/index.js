const express = require('express'); 
const CityController = require('../../controllers/city-controllers');
const FlightController = require('../../controllers/flight-controllers');
const AirportController = require('../../controllers/airport-controller');

const {FlightMiddleware} = require('../../middlewares/index');

const router = express.Router();

router.post('/city', CityController.create);
router.delete('/city/:id', CityController.destroy);
router.get('/city/:id', CityController.get);
router.patch('/city/:id', CityController.update);
router.get('/city', CityController.getAll);

router.post('/flights',FlightMiddleware.validateCreateFlight, FlightController.create);
router.get('/flights', FlightController.getAll);
router.get('/flights/:id',FlightController.get)
router.patch('/flights/:id', FlightController.update)

router.post('/airports',AirportController.create);

module.exports = router;