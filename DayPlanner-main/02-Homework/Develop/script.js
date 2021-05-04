//showing current date and time at the top of page
var thisDate = moment().format("dddd, MMMM Do, h:mm:ss a");
$('#currentDay').text(thisDate);


//creating timeslots variables for each HTML element
var nine = document.getElementById("hour-9");
var ten = document.getElementById("hour-10");
var eleven = document.getElementById("hour-11");
var twelve = document.getElementById("hour-12");
var one = document.getElementById("hour-1");
var two = document.getElementById("hour-2");
var three = document.getElementById("hour-3");
var four = document.getElementById("hour-4");
var five = document.getElementById("hour-5");

//Connecting all timeslots under one parent variable
var timeslots = [nine, ten, eleven, twelve, one, two, three, four, five];

console.log(timeslots);

//creating variable for text description
var textArea = document.querySelector("#col-md-10 description")

//and variable for user input 
var text = [];

//create local storage for user text input 
function init() {
    var storedText = JSON.parse(localStorage.getItem(textArea));

    if (storedText !== null) {
        textArea = storedText;
    }
    console.log(textArea);
}

//append item to text field
function localStorage(storage) {
    let value = localStorage.getItem(storage);
    if (value) {
        $('col-md-10 description$').text(value)
    }
};
localStorage.setItem(textArea);

//add save button feature to append text element

var saveBtn = document.getElementsById("saveBtn");

//create a click button to save text that prevents items from refreshing 

saveBtn.addEventListener("click", function(event)  {
    event.preventDefault();

// Return from function early if submitted todoText is blank
  if (storedText === "") {
        return; 
}

//Calls for function
init();
localStorage();
renderTodos();
preventDefault();


//creating variables to indicate whether a task is Current
var current = moment().format("HH") //because only needs hour timeslot 

//creating an event to color code user tasks to show if they are current (blue), past (red), or future (green)
textArea.each( function () {
    var indyHour = parseInt($( this ).parent().attr("id"));
    if (indyHour < current) {
        $( this ).css("background-color", "red")
    } else if (indyHour == current) {
$( this ).css("background-color", "blue")
    } else {
        $ (this ).css("background-color", "green")
    }
}; 

