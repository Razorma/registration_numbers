let regNumber = {}
let townNumber = []


let townsChosen = []
var registrationCounter = 0;

var trackRegistrations = 0;
function displayRegNumber() {
    let message = ""
    const allowed = /^C[FKLAYJ](\s\d{1,6}|\s\d{1,3}-\d{1,3})*$/;
    function setRegNumbers(reg) {

        if (allowed.test(reg.toUpperCase())) {
            trackRegistrations = 0
            const regs = reg.replace(/[\s-]/g, '')
            if (regNumber[regs] === undefined) {
                registrationCounter++

                regNumber[regs] = regs.toUpperCase().replace(/(.{2})/, '$1 ')
            } else {
                trackRegistrations++
                regNumber[regs] = regs.toUpperCase().replace(/(.{2})/, '$1 ')
            }
        } else {
            message = "enter only registrations from Paarl, Bellville, Stellenbosch, Malmesbury, Cape-Town, and Kuilsriver"
        }
    }


    function getRegNumber() {
        return regNumber
    }
    function regNumberCounter() {
        return registrationCounter
    }

    function setTowns(townPrefix) {

        townsChosen = [];
        for (let regs in regNumber) {

            if (regNumber[regs].startsWith(townPrefix)) {
                townsChosen.push(regNumber[regs])
            }
        }
    }

    function getAllTowns() {
        return townsChosen
    }

    function getTowns() {
        return townsChosen
    }
    function getErrorMessage() {
        return message
    }
    function trackReg() {
        return trackRegistrations++
    }
    return {
        setRegNumbers,
        getRegNumber,
        setTowns,
        getAllTowns,
        regNumberCounter,
        getTowns,
        getErrorMessage,
        trackReg,
    }
}
