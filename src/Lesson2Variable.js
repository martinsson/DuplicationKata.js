const Song = require("./Song.js");
class Lesson2Variable extends Song.Song {
    constructor(){
        super();
    }
    singBottlesOfBeer() {
        let bottles = 100

        bottles = this.singRefrain(bottles)
        bottles = this.singRefrain(bottles)


    }

    singRefrain(bottles) {
        this.sing(bottles + " bottles of beer on the wall")
        this.sing(bottles + " bottles of beer")
        this.sing("Take one down, pass it around")
        bottles--
        this.sing(bottles + " bottles of beer on the wall")
        return bottles
    }
}


module.exports = {
    Lesson2Variable
}
