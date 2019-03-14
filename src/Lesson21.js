const Song = require("./Song.js")


class Lesson21 extends Song.Song {
    constructor() {
        super()
    }

    singSong(style, names) {
        let singerStrategies = [new Style1(), new Style2(), new Style3()]
        let singer = singerStrategies[style - 1]
        for (let name of names) {

            if (singer.isMatch(name)) {
                this.sing(singer.matchPhrase(name))
            } else {
                this.singHello(name)
            }
        }
    }


    singHello(name) {
        this.sing("Hello " + name + ", it's nice to meet you.")
    }
}


class Style1 extends Lesson21 {

    isMatch(name) {
        return name.startsWith("L", 0)
    }

    matchPhrase(name) {
        return "Hip Hip Horray! For " + name
    }
}

class Style2 extends Lesson21 {

    isMatch(name) {
        return name.startsWith("am", 1)
    }

    matchPhrase(name) {
        return "Say yeah! Say yo! Say " + name
    }
}

class Style3 extends Lesson21 {

    isMatch(name) {
        return false
    }

    matchPhrase(name) {
        throw new Error('should not happen')
    }
}

module.exports = {
    Lesson21
}
