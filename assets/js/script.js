//creates variables that correspond to each of the hour block sections and each of the text area blocks
var hourNine = document.querySelector("#hour-9");
var hourTen = document.querySelector("#hour-10");
var hourEleven = document.querySelector("#hour-11");
var hourTwelve = document.querySelector("#hour-12");
var hourThirteen = document.querySelector("#hour-13");
var hourFourteen = document.querySelector("#hour-14");
var hourFifteen = document.querySelector("#hour-15");
var hourSixteen = document.querySelector("#hour-16");
var hourSeventeen = document.querySelector("#hour-17");
var listedDate = document.querySelector("#todayDate");
var input9 = document.getElementById("save-9");
var input10 = document.getElementById("save-10");
var input11 = document.getElementById("save-11");
var input12 = document.getElementById("save-12");
var input13 = document.getElementById("save-13");
var input14 = document.getElementById("save-14");
var input15 = document.getElementById("save-15");
var input16 = document.getElementById("save-16");
var input17 = document.getElementById("save-17");

var saveButtonEl = $('.saveBtn'); //button variable to create click listener

function getEvent() { //function displays all the saved local storage data as solid permanent changes on the calendar
  input9.textContent = localStorage.getItem("event9");
  input10.textContent = localStorage.getItem("event10");
  input11.textContent = localStorage.getItem("event11");
  input12.textContent = localStorage.getItem("event12");
  input13.textContent = localStorage.getItem("event13");
  input14.textContent = localStorage.getItem("event14");
  input15.textContent = localStorage.getItem("event15");
  input16.textContent = localStorage.getItem("event16");
  input17.textContent = localStorage.getItem("event17");
}

function setEvent() { //function saves all the inputs written into the textarea boxes in local storage
  localStorage.setItem("event9", input9.value);
  localStorage.setItem("event10", input10.value);
  localStorage.setItem("event11", input11.value);
  localStorage.setItem("event12", input12.value);
  localStorage.setItem("event13", input13.value);
  localStorage.setItem("event14", input14.value);
  localStorage.setItem("event15", input15.value);
  localStorage.setItem("event16", input16.value);
  localStorage.setItem("event17", input17.value);
}

function SetDate() { //function that gets all the current date values and displays it in the header
  var currentDate = dayjs().date();
  var currentMonth = dayjs().month()+1;
  var currentYear = dayjs().year();
  var finalDate = currentMonth + "/" + currentDate + "/" + currentYear;
  listedDate.append(finalDate);
}

SetDate();

$(function () {
  getEvent();
  saveButtonEl.on('click', function() { //listener event for the click on the save that executes the local storage function
    setEvent();
  });

  var currentHour = dayjs().hour(); //gets current hour and cycles through options to set the proper classes

  if (currentHour<9) {
    hourNine.setAttribute("class", "row time-block future");
    hourTen.setAttribute("class", "row time-block future");
    hourEleven.setAttribute("class", "row time-block future");
    hourTwelve.setAttribute("class", "row time-block future");
    hourThirteen.setAttribute("class", "row time-block future");
    hourFourteen.setAttribute("class", "row time-block future");
    hourFifteen.setAttribute("class", "row time-block future");
    hourSixteen.setAttribute("class", "row time-block future");
    hourSeventeen.setAttribute("class", "row time-block future");
  }
  else if (currentHour===9) {
    hourNine.setAttribute("class", "row time-block present");
    hourTen.setAttribute("class", "row time-block future");
    hourEleven.setAttribute("class", "row time-block future");
    hourTwelve.setAttribute("class", "row time-block future");
    hourThirteen.setAttribute("class", "row time-block future");
    hourFourteen.setAttribute("class", "row time-block future");
    hourFifteen.setAttribute("class", "row time-block future");
    hourSixteen.setAttribute("class", "row time-block future");
    hourSeventeen.setAttribute("class", "row time-block future");
  }
  else if (currentHour===10) {
    hourNine.setAttribute("class", "row time-block past");
    hourTen.setAttribute("class", "row time-block present");
    hourEleven.setAttribute("class", "row time-block future");
    hourTwelve.setAttribute("class", "row time-block future");
    hourThirteen.setAttribute("class", "row time-block future");
    hourFourteen.setAttribute("class", "row time-block future");
    hourFifteen.setAttribute("class", "row time-block future");
    hourSixteen.setAttribute("class", "row time-block future");
    hourSeventeen.setAttribute("class", "row time-block future");
  }
  else if (currentHour===11) {
    hourNine.setAttribute("class", "row time-block past");
    hourTen.setAttribute("class", "row time-block past");
    hourEleven.setAttribute("class", "row time-block present");
    hourTwelve.setAttribute("class", "row time-block future");
    hourThirteen.setAttribute("class", "row time-block future");
    hourFourteen.setAttribute("class", "row time-block future");
    hourFifteen.setAttribute("class", "row time-block future");
    hourSixteen.setAttribute("class", "row time-block future");
    hourSeventeen.setAttribute("class", "row time-block future");
  }
  else if (currentHour===12) {
    hourNine.setAttribute("class", "row time-block past");
    hourTen.setAttribute("class", "row time-block past");
    hourEleven.setAttribute("class", "row time-block past");
    hourTwelve.setAttribute("class", "row time-block present");
    hourThirteen.setAttribute("class", "row time-block future");
    hourFourteen.setAttribute("class", "row time-block future");
    hourFifteen.setAttribute("class", "row time-block future");
    hourSixteen.setAttribute("class", "row time-block future");
    hourSeventeen.setAttribute("class", "row time-block future");
  }
  else if (currentHour===13) {
    hourNine.setAttribute("class", "row time-block past");
    hourTen.setAttribute("class", "row time-block past");
    hourEleven.setAttribute("class", "row time-block past");
    hourTwelve.setAttribute("class", "row time-block past");
    hourThirteen.setAttribute("class", "row time-block present");
    hourFourteen.setAttribute("class", "row time-block future");
    hourFifteen.setAttribute("class", "row time-block future");
    hourSixteen.setAttribute("class", "row time-block future");
    hourSeventeen.setAttribute("class", "row time-block future");
  }
  else if (currentHour===14) {
    hourNine.setAttribute("class", "row time-block past");
    hourTen.setAttribute("class", "row time-block past");
    hourEleven.setAttribute("class", "row time-block past");
    hourTwelve.setAttribute("class", "row time-block past");
    hourThirteen.setAttribute("class", "row time-block past");
    hourFourteen.setAttribute("class", "row time-block present");
    hourFifteen.setAttribute("class", "row time-block future");
    hourSixteen.setAttribute("class", "row time-block future");
    hourSeventeen.setAttribute("class", "row time-block future");
  }
  else if (currentHour===15) {
    hourNine.setAttribute("class", "row time-block past");
    hourTen.setAttribute("class", "row time-block past");
    hourEleven.setAttribute("class", "row time-block past");
    hourTwelve.setAttribute("class", "row time-block past");
    hourThirteen.setAttribute("class", "row time-block past");
    hourFourteen.setAttribute("class", "row time-block past");
    hourFifteen.setAttribute("class", "row time-block present");
    hourSixteen.setAttribute("class", "row time-block future");
    hourSeventeen.setAttribute("class", "row time-block future");
  }
  else if (currentHour===16) {
    hourNine.setAttribute("class", "row time-block past");
    hourTen.setAttribute("class", "row time-block past");
    hourEleven.setAttribute("class", "row time-block past");
    hourTwelve.setAttribute("class", "row time-block past");
    hourThirteen.setAttribute("class", "row time-block past");
    hourFourteen.setAttribute("class", "row time-block past");
    hourFifteen.setAttribute("class", "row time-block past");
    hourSixteen.setAttribute("class", "row time-block present");
    hourSeventeen.setAttribute("class", "row time-block future");
  }
  else if (currentHour===17) {
    hourNine.setAttribute("class", "row time-block past");
    hourTen.setAttribute("class", "row time-block past");
    hourEleven.setAttribute("class", "row time-block past");
    hourTwelve.setAttribute("class", "row time-block past");
    hourThirteen.setAttribute("class", "row time-block past");
    hourFourteen.setAttribute("class", "row time-block past");
    hourFifteen.setAttribute("class", "row time-block past");
    hourSixteen.setAttribute("class", "row time-block past");
    hourSeventeen.setAttribute("class", "row time-block present");
  }
  else {
    hourNine.setAttribute("class", "row time-block past");
    hourTen.setAttribute("class", "row time-block past");
    hourEleven.setAttribute("class", "row time-block past");
    hourTwelve.setAttribute("class", "row time-block past");
    hourThirteen.setAttribute("class", "row time-block past");
    hourFourteen.setAttribute("class", "row time-block past");
    hourFifteen.setAttribute("class", "row time-block past");
    hourSixteen.setAttribute("class", "row time-block past");
    hourSeventeen.setAttribute("class", "row time-block past");
  }
});
