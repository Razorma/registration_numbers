function displayRegNumbers(){
    function getRegNumber(reg){
        let registration = reg.split(' ')
        return registration
    }
    return{
        getRegNumber
    }
}
console.log(displayRegNumbers().getRegNumber("CA 12558"))