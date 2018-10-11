//VARIABLES FOR TIME

var date = new Date();
console.log(date)
var year = date.getFullYear(); 
var month = date.getMonth();
var day = date.getDay();
var hours = date.getHours();
var minutes = date.getMinutes();
var seconds = date.getSeconds();

var TIMESTAMP = month + "/" + day + "/" + year + " " + hours + ":" + minutes + ":" + seconds;


//ARRAYS FOR RANDOM
var fonts = ["monospace", "cursive", "serif", "san-serif", "impact"];
var letterspacing = [0, 5, 10, 15];
var colors = ["black", "red", "blue"];

//FUNCTION TO UPLOAD IMAGE   
function previewFile(){
       var preview = document.querySelector('img'); //selects the query named img
       var file    = document.querySelector('input[type=file]').files[0]; //sames as here
       var reader  = new FileReader();
       reader.onloadend = function () {
        preview.src = reader.result;
       }
       if (file) {
        reader.readAsDataURL(file); //reads the data as a URL
           
       } else {
        preview.src = "";
       }

       $("date").text(TIMESTAMP);
  }

//FUNCTION TO UPLOAD/STYLE TEXT AND SUBMIT TIMESTAMP  
function append() {

var newText = $("#textarea").val();
$("#text").text(newText);

var newFont = fonts[Math.floor(Math.random()*fonts.length)];
var newSpacing = letterspacing[Math.floor(Math.random()*letterspacing.length)];
var newColor = colors[Math.floor(Math.random()*colors.length)];

$("#text").css("font-family", newFont);
$("#text").css("letter-spacing", newSpacing);
$("#right").css("background-color", newColor);
}

//ADD RANDOM COLOR TO #RIGHT BG
