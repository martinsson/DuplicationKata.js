const Song = require("./Song.js")

class Lesson3HigherOrderFunctions extends Song.Song {
    constructor() {
        super()
    }

    singSong() {
        var number = 0
        const nextNumber = n => n + 2
        this.repeat4times(number, nextNumber)

        this.sing("Who do we appreciate?")

        number = 13
        const nextPrime = n => this.getNextPrime(n)
        this.repeat4times(number, nextPrime)

        this.sing("These are the primes, that we find fine!")
    }

    repeat4times(number, nextNumber) {

        for (let i = 0; i < 4; i++) {
            number = nextNumber(number)
            this.sing(number + "! ")
        }

    }

    getNextPrime(number) {
        switch (number) {
            case 13 :
                return 17
            case 17 :
                return 19
            case 19 :
                return 23
            case 23 :
                return 29
        }
        return 0
    }

}


module.exports = {
    Lesson3HigherOrderFunctions
}
