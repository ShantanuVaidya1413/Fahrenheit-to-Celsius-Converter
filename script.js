window.onload=()=>{
let from = document.getElementById("from");
let to = document.getElementById("to");
let value1 = document.getElementById("value1");
let value2 = document.getElementById("value2");
let btn = document.getElementById("convert");
let result;

  //Enabling the use of Enter key to check for result
  value1.addEventListener('keypress', function(event){
    if (event.key === "Enter") {
    event.preventDefault();
    btn.click();
    }
  });

  btn.addEventListener("click",()=>{
    //Stopping the run when input is empty
    if (!value1.value) {
      alert("Please input a value");
      return;
    }
    //seize operation when nothing is selected
    let checkSelect1 = from.value=="" && to.value=="";
    let checkSelect2 = from.value=="" || to.value=="";
    if (checkSelect1 || checkSelect2) {
      alert("Please pick your selection");
      return;
    }
    
    //Convert from Celsius to Kelvin
    if (from.value=="celsius" && to.value=="k") {
      result = parseInt(value1.value)+273;
    }
    //Convert from Celsius to Fahrenheit
    if (from.value=="celsius" && to.value=="°F") {
      result = (parseInt(value1.value)*9/5) +32;
    }
    //Convert form Kelvin to Celsius
    if (from.value=="kelvin" && to.value=="°c") {
      result = parseInt(value1.value)-273;
    }
    //Convert form Kelvin to Fahrenheit
    if (from.value=="kelvin" && to.value=="°F") {
      result = (((parseInt(value1.value)-273.15)*9/5)+32).toFixed("2");
    }
    //Convert from Fahrenheit to Celsius
    if (from.value=="fahrenheit" && to.value=="°c") {
      result = ((parseInt(value1.value)-32)*5/9).toFixed("2");
    }
    //Convert from Fahrenheit to Kelvin
    if (from.value=="fahrenheit" && to.value=="k") {
      result = (((parseInt(value1.value)-32)*5/9)+273.15).toFixed(3);
      if (result.endsWith("0")) {
        result = (((parseInt(value1.value)-32)*5/9)+273.15).toFixed(2);
      }
    }

    //Check and remove the click if both of the converting units are similar
      let checkOne = from.value=="celsius" && to.value=="°c";
      let checkTwo = from.value=="kelvin" && to.value=="k";
      let checkThree = from.value=="fahrenheit" && to.value=="°F";

      //Stoping the operation
      if (checkOne || checkTwo || checkThree){
        value2.value="";
        return;
      }
      //Setting the result value
    value2.value=result+(to.value);
  });
}