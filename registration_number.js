let regNumbers = {}
let townNumbers = []
let paarl = []   // Paarl = ('CJ')
let Bellville = []// Bellville ('CY')
let Stellenbosch = []// Stellenbosch ('CL')
let Malmesbury = []// Malmesbury ('CK')
let CapeTown = []// Cape-Town ('CA')
let Kuilsriver = []// Kuilsriver ('CF')
let townChosen = []
var registrationCounter = 0;
let bb = []

function displayRegNumbers(){
    let message = ""
    const allowed = /^C[FKLAYJ]\s\d*$/;
    function setRegNumber(reg){
        if(allowed.test(reg)){
      if(regNumbers[reg] === undefined){
          registrationCounter++
          regNumbers[reg] = reg
      }else{
          regNumbers[reg] = reg
      }
    }else{
        message = "enter only registrations from Paarl, Bellville, Stellenbosch, Malmesbury, Cape-Town, and Kuilsriver"
    }
    }
    
      function getRegNumbers(){
          return regNumbers
    }
    function regNumberCounter(){
        return registrationCounter
    }


    function setTown(townPrefix){
        townChosen = [];
        for(let reg in regNumbers){
            if(regNumbers[reg].startsWith(townPrefix) ){
                townChosen.push(regNumbers[reg])
            }
        }
    }
    
    function getTown(){
        return townChosen
    }
    function getError(){
        return message
    }
    return{
        setRegNumber,
        getRegNumbers,
        setTown,
        regNumberCounter,
        getTown,
        getError,
    }
}

