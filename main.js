let bandNumber = 1

const takeNumber = function (bandName) {
    return `${bandNumber++}. ${bandName}`;
}

const scum = takeNumber("Galactic Scum")
console.log(scum)

const under = takeNumber("Underdogs")
console.log(under)