const {CrudRepository} = require('./crud-repository');
const {Airplane} = require('../models');
class AirplaneRepository extends CrudRepository{
    constructor(){
        super(Airplane);
    }
}
module.exports= AirplaneRepository;

// why i am getting below erro n?
/**
 * C:\Users\harshit pant\Downloads\developer\Flights\src\repositories\airplane-repository.js:3
class AirplaneRepository extends CrudRepository{
                                 ^

TypeError: Class extends value #<Object> is not a constructor or null
    at Object.<anonymous> (C:\Users\harshit pant\Downloads\developer\Flights\src\repositories\airplane-repository.js:3:34)
    at Module._compile (node:internal/modules/cjs/loader:1812:14)
    at Object..js (node:internal/modules/cjs/loader:1943:10)
    at Module.load (node:internal/modules/cjs/loader:1533:32)
    at Module._load (node:internal/modules/cjs/loader:1335:12)
    at wrapModuleLoad (node:internal/modules/cjs/loader:255:19)
    at Module.require (node:internal/modules/cjs/loader:1556:12)
    at require (node:internal/modules/helpers:152:16)
    at Object.<anonymous> (C:\Users\harshit pant\Downloads\developer\Flights\src\repositories\index.js:2:25)
    at Module._compile (node:internal/modules/cjs/loader:1812:14)

Node.js v24.14.0
[nodemon] app crashed - waiting for file changes before starting..

answer ?The error you're encountering indicates that the `CrudRepository` class is not being imported correctly or is not defined as a proper class. The error message:
so what to do ?
 */