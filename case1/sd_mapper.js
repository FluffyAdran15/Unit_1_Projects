"strict use";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Case Problem 1

   Planisphere Script
   Author: Adrian Soliz
   Date:   01/16/20

*/

//creating  time variables
var thisTime = new Date();
var timeStr = thisTime.toLocaleString()
document.getElementById("timeStamp").innerHTML = timeStr;
// creating month and hour equal now time
var thisHour = thisTime.getHours();
var thisMonth = thisTime.getMonth();
//making sky map 
var mapNum = (2 * thisMonth + thisHour) % 24;
var imgStr = "<img src='sd_sky" + mapNum +  ".png'/>";
//placing the image
document.getElementById("planisphere").insertAdjacentHTML("afterbegin", imgStr);