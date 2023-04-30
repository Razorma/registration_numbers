const addButton = document.querySelector(".addButton");
const clearButton = document.querySelector(".clearButton");
const showButton = document.querySelector(".showButton");
const enteredTown = document.querySelector(".town-area");
const selectElement = document.querySelector(".select");
const numberPlate = document.querySelector(".numberPlate");
const numberPlateList = document.querySelector(".numberPlateList");

const registrationList = document.createElement("li")


const enteredTownInput = document.querySelector('input[type="text"]');
const registrationNumbers = displayRegNumbers()





regNumbers = JSON.parse(localStorage.getItem('regNumber')) || {};
console.log(JSON.parse(localStorage.getItem('regNumber')))

addButton.addEventListener("click", function(){
    // numberPlate.innerHTML = enteredTown.value
    // registrationList.textContent = enteredTown.value
    // numberPlateList.appendChild(registrationList);
    registrationNumbers.setRegNumber(enteredTown.value)
    //go use the storage to keep the array and object
    
    localStorage.setItem('regNumber', JSON.stringify(registrationNumbers.getRegNumbers()));
    
    //   console.log(registrationNumbers.getRegNumbers())
    //   console.log(JSON.stringify(registrationNumbers.getRegNumbers()))
      registrationNumbers.setTown(selectElement.value)
    //   console.log(registrationNumbers.getTown())
   
    // numberPlate.innerHTML = localStorage.getItem("regNumber")
    // console.log(registrationNumbers.getRegNumbers())
    enteredTown.value = '';
})
clearButton.addEventListener('click', function () {
    localStorage.clear();
    numberPlateList.textContent = "";
    regNumbers = {};
    enteredTown.value = '';
});

showButton.addEventListener("click", function(){
    //numberPlate.innerHTML = enteredTown.value
    // registrationList.textContent = enteredTown.value
    // numberPlateList.appendChild(registrationList);
    // console.log(selectElement.value)
    // registrationNumbers.setTown()
    //  console.log(selectElement.value)
    numberPlateList.innerHTML = "";
     registrationNumbers.setTown(selectElement.value)
     
    //  for(var i=0;i<registrationNumbers.getTown().length;i++){
    //     registrationList.textContent = registrationNumbers.getTown()[i]
    //    console.log(registrationNumbers.getTown()[i])
    //    numberPlate.innerHTML = registrationNumbers.getTown()[i]
    //    numberPlateList.appendChild(registrationList)[i];
    // }
    // registrationNumbers.getTown().forEach(registration => {
        
    //     registrationList.textContent = registration;
    //     numberPlateList.appendChild(numberPlateList);
    //   });
   
      for (let i = 0; i < registrationNumbers.getTown().length; i++) {
        const listItem = document.createElement('li');
        listItem.textContent = registrationNumbers.getTown()[i];
        numberPlateList.appendChild(listItem);
      }
     //right now i need to go learn about appeding and adding other html documents
     
     

})

// .toString()