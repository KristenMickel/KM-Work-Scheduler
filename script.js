//Prints current date at top of scheduler
var currentDate = moment().format('MMMM Do YYYY');
$("#currentDay").html(currentDate);

//Function to make the time blocks; set them to past, present, or future; and allow the user to add items to their schedule
var makeTimeBlock = function (hour) {

//Create main variables for scheduler
    var buttonEl = document.createElement("button")
    var hourEl = document.createElement("h2")
    var descriptionEl = document.createElement("textarea")
    var rowEl = document.createElement("div")

//JavaScript classList property has the "add" method in order to add classes to the element
    buttonEl.classList.add("col-2", "saveBtn")
    hourEl.classList.add("col-2", "hour")
    descriptionEl.classList.add("col", "description")
    rowEl.classList.add("row", "time-block")

//Defines and sets hours variable using moment.js
var hours = moment().hour()

//Determines if each time block is in the past, present, or future
    if (hour < hours) {
    descriptionEl.classList.add("past")
    }
    else if (hour == hours) {
    descriptionEl.classList.add("present")
    }
    else if (hour > hours) {
    descriptionEl.classList.add("future")
    }

//Time Blocks
    if (hour < 12) {
        hourEl.textContent = hour + "AM"   
    }
    else if (hour == 12) {
        hourEl.textContent = 12 + "PM"   
    }
    else if (hour == 13) {
        hourEl.textContent = 1 + "PM"     
    }
    else if (hour == 14) {
        hourEl.textContent = 2 + "PM"     
    } 
    else if (hour == 15) {
        hourEl.textContent = 3 + "PM"     
    }
    else if (hour == 16) {
        hourEl.textContent = 4 + "PM"     
    } 
    else if (hour == 17) {
        hourEl.textContent = 5 + "PM"     
    }
    else if (hour == 18) {
        hourEl.textContent = 6 + "PM"     
    } 
    else if (hour == 19) {
        hourEl.textContent = 7 + "PM"     
    }
    else if (hour == 20) {
        hourEl.textContent = 8 + "PM"     
    } 
    else if (hour == 21) {
        hourEl.textContent = 9 + "PM"     
    }
    else if (hour == 22) {
        hourEl.textContent = 10 + "PM"     
    } 
    else if (hour == 23) {
        hourEl.textContent = 11 + "PM"     
    }
    else if (hour == 24) {
        hourEl.textContent = 12 + "AM"     
    } 

//Clears schedule entry box
    descriptionEl.value = ""

//Adds lock icon to button next to schedule entry box
    buttonEl.textContent = "🔓︎"

//Uses addEventListener to listen for "click" event and save scheduling entries into Local Storage
    buttonEl.addEventListener("click", function () {
        var text = descriptionEl.value;
        localStorage.setItem("savedTasks", text);
    }, false);

    rowEl.append(hourEl, descriptionEl, buttonEl)
    document.querySelector(".container").append(rowEl)
}

//For loop to run the makeTimeBlock function starting at 5AM until midnight, incrementing by one hour at a time
for (var hour = 5; hour <= 24; hour++) {
    makeTimeBlock(hour)
}