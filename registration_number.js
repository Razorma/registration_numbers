let regNumbers = {}
let townNumbers = []
   // Paarl = ('CJ')
// Bellville ('CY')
// Stellenbosch ('CL')
// Malmesbury ('CK')
// Cape-Town ('CA')
// Kuilsriver ('CF')
let townChosen = []
var registrationCounter = 0;
let bb = []

function displayRegNumbers() {
    let message = ""
    const allowed = /^C[FKLAYJ]\s\d*$/;
    function setRegNumber(reg) {
        if (allowed.test(reg.toUpperCase())) {
            if (regNumbers[reg] === undefined) {
                registrationCounter++
                regNumbers[reg] = reg.toUpperCase()
            } else {
                regNumbers[reg] = reg.toUpperCase()
            }
        } else {
            message = "enter only registrations from Paarl, Bellville, Stellenbosch, Malmesbury, Cape-Town, and Kuilsriver"
        }
    }

    function getRegNumbers() {
        return regNumbers
    }
    function regNumberCounter() {
        return registrationCounter
    }


    function setTown(townPrefix) {
        townChosen = [];
        for (let reg in regNumbers) {
            if (regNumbers[reg].startsWith(townPrefix)) {
                townChosen.push(regNumbers[reg])
            }
        }
    }

    function getTown() {
        return townChosen
    }
    function getError() {
        return message
    }
    return {
        setRegNumber,
        getRegNumbers,
        setTown,
        regNumberCounter,
        getTown,
        getError,
    }
}

