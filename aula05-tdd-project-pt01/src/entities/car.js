const Base = require('./base/base');
class Car extends Base{
    constructor({id, name, releaseYear, avaible, gasAvaible}){
        super({id,name})
        this.releaseYear = releaseYear;
        this.avaible = avaible;
        this.gasAvaible = gasAvaible;
    }
}

module.exports = Car