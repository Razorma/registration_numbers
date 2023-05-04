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

var trackRegistrations = 0;
function displayRegNumbers() {
    let message = ""
    const allowed = /^C[FKLAYJ](\s\d{1,6}|\s\d{1,3}-\d{1,3})*$/;
    function setRegNumber(reg) {
        
        if (allowed.test(reg.toUpperCase())) {
            trackRegistrations =0
            const regs = reg.replace(/[\s-]/g, '')
            if (regNumbers[regs] === undefined) {
                registrationCounter++
               
                regNumbers[regs] = regs.toUpperCase().replace(/(.{2})/, '$1 ')
            } else {
                trackRegistrations++
                regNumbers[regs] = regs.toUpperCase().replace(/(.{2})/, '$1 ')
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

    function setAllTown() {
        townNumbers = [];
        for (let regs in regNumbers) {
            
            townNumbers.push(regNumbers[regs])
        }
    }

    function setTown(townPrefix) {
        
        townChosen = [];
        for (let regs in regNumbers) {
            
            if (regNumbers[regs].startsWith(townPrefix)) {
                townChosen.push(regNumbers[regs])
            }
        }
    }

    function getAllTown() {
        return townChosen
    }

    function getTown() {
        return townChosen
    }
    function getError() {
        return message
    }
    function trackReg() {
        return trackRegistrations++
    }
    return {
        setRegNumber,
        getRegNumbers,
        setAllTown,
        setTown,
        getAllTown,
        regNumberCounter,
        getTown,
        getError,
        trackReg,
    }
}



