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
    function setRegNumber(reg){
      if(regNumbers[reg] === undefined){
          registrationCounter++
          regNumbers[reg] = reg
      }else{
          regNumbers[reg] = reg
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
    return{
        setRegNumber,
        getRegNumbers,
        setTown,
        regNumberCounter,
        getTown,
    }
}

// const reg = displayRegNumbers();
// // reg.setRegNumber("CL 11318")
// reg.setRegNumber("CG 11318")
// reg.setRegNumber("CL 11318")
// reg.setRegNumber("CC 11318")
// reg.setRegNumber("CL 11318")
// console.log(reg.getRegNumbers())


// function setTown(){
    //     for(let reg in regNumbers){
    //       if(regNumbers[reg].startsWith('CJ') ){
    //           paarl.push(regNumbers[reg])
    //       }else if(regNumbers[reg].startsWith('CY') ){
    //           Bellville.push(regNumbers[reg])
    //       }else if(regNumbers[reg].startsWith('CL') ){
    //           Stellenbosch.push(regNumbers[reg])
    //       }else if(regNumbers[reg].startsWith('CK') ){
    //           Malmesbury.push(regNumbers[reg])
    //       }else if(regNumbers[reg].startsWith('CA') ){
    //           CapeTown.push(regNumbers[reg])
    //       }else if(regNumbers[reg].startsWith('CF') ){
    //           Kuilsriver.push(regNumbers[reg])
    //       }
    //      }
    //      return{
    //          paarl,
    //          Bellville,
    //          Stellenbosch,
    //          Malmesbury,
    //          CapeTown,
    //          Kuilsriver,
    //      }
    //     }
    // function setTown(){
    //     for(let reg in regNumbers){
    //       if(regNumbers[reg].startsWith('CJ') ){
    //           paarl.push(regNumbers[reg])
    //       }else if(regNumbers[reg].startsWith('CY') ){
    //           Bellville.push(regNumbers[reg])
    //       }else if(regNumbers[reg].startsWith('CL') ){
    //           Stellenbosch.push(regNumbers[reg])
    //       }else if(regNumbers[reg].startsWith('CK') ){
    //           Malmesbury.push(regNumbers[reg])
    //       }else if(regNumbers[reg].startsWith('CA') ){
    //           CapeTown.push(regNumbers[reg])
    //       }else if(regNumbers[reg].startsWith('CF') ){
    //           Kuilsriver.push(regNumbers[reg])
    //       }
    //      }
    //      return{
    //          paarl,
    //          Bellville,
    //          Stellenbosch,
    //          Malmesbury,
    //          CapeTown,
    //          Kuilsriver,
    //      }
       
    // }