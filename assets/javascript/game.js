$(document).ready(function(){
// variables
var wins = 0;
var loss = 0;
var score = 0;



// computer chooses random number
var computer;


//Crystals
var gem1;
var gem2;
var gem3;
var gem4;



//reset the game if the user loses or wins
  function reset(){
  	score = 0;
$("#score").html("Score is: " + score);
  computer = (Math.floor(Math.random() * (120-19)+1) +19);
$("#randomNumber").html("game: " + computer);
  	 gem1 = (Math.floor(Math.random() * 12) + 1);
     gem2 = (Math.floor(Math.random() * 12) + 1);
     gem3 = (Math.floor(Math.random() * 12) + 1);
     gem4 = (Math.floor(Math.random() * 12) + 1);
  };


//onclick events for the crystals
$(".image").on("click", function() {
  	if($(this).attr("class") === "image") {
  		if($(this).attr("id") === "gem1") {
  			score = parseInt(score) + parseInt(gem1);
  			}
  		 }
  if($(this).attr("id") === "gem2") {
    	  score = parseInt(score) + parseInt(gem2);
       }
  if($(this).attr("id") === "gem3") {
    	   score = parseInt(score) + parseInt(gem3);
       }  	    
  if($(this).attr("id") === "gem4") {
    	   score = parseInt(score) + parseInt(gem4);
       }	  
   
   
$("#score").html("Score is: " + score);

  if(score === computer) {
   	wins++;
   	$("#win").html("win: " + wins);
   	reset();
   } else if (score > computer) {
   	loss++;
   	$("#lose").html("losses: " + loss);
  	reset();
        }
          });
    reset();
    
 });





