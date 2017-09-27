/* 
Project:  Hands-On Project 2-1
Author:Logan Rabalais
Date: 9/11/17
Purpose:  
*/

function convert() 
{
  var degF = document.getElementById("fValue").value
  var degC = (degF - 32) * (5 / 9);
  
  document.getElementById("cValue").innerHTML = degC.toFixed(1);
}

document.getElementById("button").addEventListener("click", convert, false);