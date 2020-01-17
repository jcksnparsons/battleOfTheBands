let bandNumber = 1

const takeNumber = function (bandName) {
    console.log(bandNumber, bandName);
    bandNumber++;
}

const scum = takeNumber("Galactic Scum")// This should print "1. Galactic Scum" in the console

const under = takeNumber("Underdogs")

const obj = takeNumber("Smart Objects")