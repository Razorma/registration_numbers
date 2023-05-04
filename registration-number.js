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




addButton.addEventListener("click", function () {
  
  registrationNumbers.setRegNumber(enteredTown.value)
 
 
  const letterRegex =/^C[FKLAYJ](\s\d{1,6}|\s\d{3,3}-\d{3,3})*$/; 
  if (enteredTown.value.toUpperCase() != '') {
    if (!letterRegex.test(enteredTown.value.toUpperCase())) {
      messageInput.innerHTML = "enter only registrations from Paarl, Bellville, Stellenbosch, Malmesbury, Cape-Town, and Kuilsriver"
      messageInput.classList.remove("information");
      messageInput.classList.add("warning");
      setTimeout(function () {
        messageInput.innerHTML = ""
      }, 3000);
      //alert()
    }
    
    const myListString = localStorage.getItem('myList');
    const myList = JSON.parse(myListString) || [];
    const entered = enteredTown.value.toUpperCase().replace(/[\s-]/g, '')
    if (myList.includes(entered.toUpperCase().replace(/(.{2})/, '$1 '))) {
      messageInput.innerHTML = "registration already exists"
      messageInput.classList.remove("information");
      messageInput.classList.add("warning");
      setTimeout(function () {
        messageInput.innerHTML = ""
      }, 2500);
    }
  
   
    
 
    localStorage.setItem('regNumber', JSON.stringify(registrationNumbers.getRegNumbers()));
    registrationNumbers.setTown(selectElement.value)
    enteredTown.value = '';
    
     
  } else if (enteredTown.value.toUpperCase() === ''){
    messageInput.innerHTML = "enter registration number"
    messageInput.classList.remove("information");
    messageInput.classList.add("warning");
    setTimeout(function () {
      messageInput.innerHTML = ""
    }, 2500);

    
  } 
  
  
  numberPlateList.textContent = "";

 for (let i = 0; i < registrationNumbers.getAllTown().length; i++) {
      const listItem = document.createElement('li');
      listItem.textContent = registrationNumbers.getAllTown()[i];
      numberPlateList.appendChild(listItem);     
     }
     localStorage.setItem('myList', JSON.stringify(registrationNumbers.getAllTown()));    
})
clearButton.addEventListener('click', function () {
  localStorage.clear();
  numberPlateList.textContent = "";
  regNumbers = {};
  enteredTown.value = '';
  messageInput.innerHTML = "You have cleared all the  registration numbers from the storage"
  messageInput.classList.remove("warning");
  messageInput.classList.add("information");
  setTimeout(function () {
     messageInput.innerHTML = ""
  }, 2500);
});





showButton.addEventListener("click", function () {
 
    
    numberPlateList.innerHTML = "";
    registrationNumbers.setTown(selectElement.value)
    const selectedOption = selectElement.options[selectElement.selectedIndex];
    const theselectedOption = selectedOption.dataset.name;
    
   
    if(registrationNumbers.getTown() == ''){
      const listItem = document.createElement('h4');
      listItem.textContent = `Please add registration numbers from ${theselectedOption}`;
      messageInput.classList.remove("information");
      listItem.classList.add("warning");
      numberPlate.appendChild(listItem);
  
      setTimeout(function () {
        listItem.remove();
      }, 2500);
    }else{
    for (let i = 0; i < registrationNumbers.getTown().length; i++) {
      const listItem = document.createElement('li');
      listItem.textContent = registrationNumbers.getTown()[i];
      numberPlateList.appendChild(listItem);
    }
  }

})


