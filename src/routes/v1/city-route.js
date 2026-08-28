const express = require('express')

const router = express.Router();

const { CityController } = require('../../controller')
// api/v1/cities ---->POST

router
      .post('/', CityController.createCity)

// api/v1/cities --->GET

router
      .get('/',CityController.getAllCities);


router
     .get('/:id',CityController.getCity);

router
     .delete('/:id', CityController.deleteCity);     
module.exports = router;






