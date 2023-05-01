const addButton = document.querySelector(".addButton");
const clearButton = document.querySelector(".clearButton");
const showButton = document.querySelector(".showButton");
const enteredTown = document.querySelector(".town-area");
const selectElement = document.querySelector(".select");
const numberPlate = document.querySelector(".numberPlate");
const numberPlateList = document.querySelector(".numberPlateList");
const messageInput = document.querySelector(".messageInput");




const enteredTownInput = document.querySelector('input[type="text"]');
const registrationNumbers = displayRegNumbers()





regNumbers = JSON.parse(localStorage.getItem('regNumber')) || {};


addButton.addEventListener("click", function(){
    registrationNumbers.setRegNumber(enteredTown.value)
    const letterRegex = /^C[FKLAYJ]\s\d*$/;
    if(enteredTown.value != ''){
  if (!letterRegex.test(enteredTown.value)) {
      alert("enter only registrations from Paarl, Bellville, Stellenbosch, Malmesbury, Cape-Town, and Kuilsriver")
  }
    localStorage.setItem('regNumber', JSON.stringify(registrationNumbers.getRegNumbers()));
    registrationNumbers.setTown(selectElement.value)
    enteredTown.value = '';
  }else{
    messageInput.innerHTML = "enter registration number"
    messageInput.classList.add("warning");
    setTimeout(function() {
      messageInput.innerHTML = ""
    }, 2000);
  }
})
clearButton.addEventListener('click', function () {
    localStorage.clear();
    numberPlateList.textContent = "";
    regNumbers = {};
    enteredTown.value = '';
});

showButton.addEventListener("click", function(){
  console.log(selectElement.value)
  if(selectElement.value === ''){
    const listItem = document.createElement('h4');
    listItem.textContent = "Please specify town";
    listItem.classList.add("warning");
    numberPlate.appendChild(listItem);

    setTimeout(function() {
      listItem.remove();
    }, 2000);
  }else{
    numberPlateList.innerHTML = "";
    registrationNumbers.setTown(selectElement.value)
      for (let i = 0; i < registrationNumbers.getTown().length; i++) {
        const listItem = document.createElement('li');
        listItem.textContent = registrationNumbers.getTown()[i];
        numberPlateList.appendChild(listItem);
      }
    } 
})


