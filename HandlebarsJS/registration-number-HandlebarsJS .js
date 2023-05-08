const addButtonTwo = document.querySelector(".addButtonTwo");
const clearButtonTwo = document.querySelector(".clearButtonTwo");
const showButtonTwo = document.querySelector("#show");

const enteredTowns = document.querySelector(".town-areas");
const selectedElement = document.querySelector(".Select");
const numberPlates = document.querySelector(".numberPlates");
const plateContainer = document.querySelector("#plate-container");
const warningMessage = document.querySelector(".warningMessage");


document.addEventListener('DOMContentLoaded', function () {
  const registrationNumber = displayRegNumber();

  regNumber = JSON.parse(localStorage.getItem("regNumbers")) || {};
  
  const myDisplayListString = localStorage.getItem("myDisplayLists");
  const myDisplayLists = JSON.parse(myDisplayListString) || [];
  let myListData = myDisplayLists
  const data = { list: myListData };

  var templateSource = document.querySelector(".userTemplate").innerHTML;
  var template = Handlebars.compile(templateSource);
  const theList = template(data);

  const listContainer = document.getElementById("plate-container");
  listContainer.innerHTML = theList;

  addButtonTwo.addEventListener("click", function () {

    registrationNumber.setRegNumbers(enteredTowns.value)
    const letterRegex = /^C[FKLAYJ](\s\d{1,6}|\s\d{3,3}-\d{3,3})*$/;
    if (enteredTowns.value.toUpperCase() != "") {
      if (!letterRegex.test(enteredTowns.value.toUpperCase())) {
        warningMessage.innerHTML =
          "enter only registrations from Paarl, Bellville, Stellenbosch, Malmesbury, Cape-Town, and Kuilsriver (Click on select town to see the formats)";
        warningMessage.classList.remove("information");
        warningMessage.classList.add("warning");
        setTimeout(function () {
          warningMessage.innerHTML = "";
        }, 3000);
      }

      const myListString = localStorage.getItem("myLists");
      const myList = JSON.parse(myListString) || [];
      const entered = enteredTowns.value.toUpperCase().replace(/[\s-]/g, "");
      if (myList.includes(entered.toUpperCase().replace(/(.{2})/, "$1 "))) {
        warningMessage.innerHTML = "registration already exists";
        warningMessage.classList.remove("information");
        warningMessage.classList.add("warning");
        setTimeout(function () {
          warningMessage.innerHTML = "";
        }, 2500);
      }

      localStorage.setItem(
        "regNumbers",
        JSON.stringify(registrationNumber.getRegNumber())
      );
      registrationNumber.setTowns(selectedElement.value);
      enteredTowns.value = "";
    } else if (enteredTowns.value.toUpperCase() === "") {
      warningMessage.innerHTML = "enter registration number";
      warningMessage.classList.remove("information");
      warningMessage.classList.add("warning");
      setTimeout(function () {
        warningMessage.innerHTML = "";
      }, 2500);
    }

    plateContainer.innerHTML = "";
    registrationNumber.setTowns(selectedElement.value);

    localStorage.setItem(
      "myDisplayLists",
      JSON.stringify(registrationNumber.getTowns())
    );

    let reg = registrationNumber.getAllTowns()
    const data = { list: reg };

    var templateSource = document.querySelector(".userTemplate").innerHTML;
    var template = Handlebars.compile(templateSource);
    const theList = template(data);

    const listContainer = document.getElementById("plate-container");
    listContainer.innerHTML = theList;
    localStorage.setItem(
      "myLists",
      JSON.stringify(registrationNumber.getAllTowns())
    );
  });

    showButtonTwo.addEventListener("click", function () {
      plateContainer.innerHTML = "";
      registrationNumber.setTowns(selectedElement.value);
      const option = selectedElement.options[selectedElement.selectedIndex];
      const selectedOption = option.dataset.name;

      if (registrationNumber.getTowns() == "") {
        const listItem = document.createElement("h4");
        listItem.textContent = `Please add registration numbers from ${selectedOption}`;
        listItem.classList.add("warning");
        numberPlates.appendChild(listItem);

        setTimeout(function () {
          listItem.remove();
        }, 2500);
      } else {
        let reg = registrationNumber.getAllTowns()
    const data = { list: reg };

    var templateSource = document.querySelector(".userTemplate").innerHTML;
    var template = Handlebars.compile(templateSource);
    const theList = template(data);

    const listContainer = document.getElementById("plate-container");
    listContainer.innerHTML = theList;
      }
      selectedElement.value ="";
      
    });

    clearButtonTwo.addEventListener("click", function () {
      localStorage.removeItem("myLists")
      localStorage.removeItem("regNumbers")
      localStorage.removeItem("myDisplayLists")
     
      plateContainer.innerHTML = "";
      regNumber = {};
      enteredTowns.value = "";
      warningMessage.innerHTML =
        "You have cleared all the  registration numbers from the storage";
        warningMessage.classList.remove("warning");
        warningMessage.classList.add("information");
      setTimeout(function () {
        warningMessage.innerHTML = "";
      }, 2500);
    });
   
});