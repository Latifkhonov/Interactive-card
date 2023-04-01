const inputName = document.getElementById("Name");

const updateName = () =>{
  const inputvalue = inputName.value;
  document.getElementById("pName").innerHTML = inputvalue;
  if (inputvalue.length < 1){
    document.getElementById("nameError").innerHTML ="You have entered a wrong format!"
    document.getElementById("Name").style.borderColor="red";
    document.getElementById("Name").style.borderstyle="solid";
  }
  else{
    document.getElementById("nameError").innerHTML =
    ""
    document.getElementById("Name").style.borderColor="green";
    document.getElementById("Name").style.borderstyle="solid";
  }
}
inputName.addEventListener("input" , updateName);



//For Card the same function

const inputcard = document.getElementById("card");
const updateCard = () =>{
  const inputvalue = inputcard.value;
  document.getElementById("spans").innerHTML = inputvalue;
  if (inputvalue.length < 16 ){
    document.getElementById("cardError").innerHTML="You have entered a wrong format!"
    document.getElementById("card").style.borderColor="red";
    document.getElementById("card").style.borderstyle="solid";
  }
  else{
    document.getElementById("cardError").innerHTML=""
    document.getElementById("card").style.borderColor="green";
    document.getElementById("card").style.borderstyle="solid";
  }
  let groups = [];
  for (let i = 0; i < 16; i += 4) {
    groups.push(inputvalue.slice(i, i + 4));
  }
  document.getElementById("p1").innerHTML = groups[0];
  document.getElementById("p2").innerHTML = groups[1];
  document.getElementById("p3").innerHTML = groups[2];
  document.getElementById("p4").innerHTML = groups[3];
}
inputcard.addEventListener("input",updateCard);


//Process for MOnth
const inputMonth = document.getElementById("month");
const updateMonth = () =>{
  const inputValue = inputMonth.value;
  document.getElementById('mon1').innerHTML = inputValue;
  if(inputValue.length<2){
    document.getElementById("errorMon").innerHTML =
    "wrong format!"
    document.getElementById("month").style.borderColor="red";
    document.getElementById("month").style.borderstyle="solid";
  }
  else{
    document.getElementById("errorMon").innerHTML = 
    ""
    document.getElementById("month").style.borderColor="green";
    document.getElementById("month").style.borderstyle="solid";
  }
}
inputMonth.addEventListener("input",updateMonth);



//Process for year
const inputYear = document.getElementById("year");
const updateYear = () => {
  const inputvalue = inputYear.value;
  document.getElementById("mon3").innerHTML = inputvalue;
  if(inputvalue.length < 4){
    document.getElementById("errorYear").innerHTML =
    "wrong format!"
    document.getElementById("year").style.borderColor="red";
    document.getElementById("year").style.borderstyle="solid";
  }
  else{
    document.getElementById("errorYear").innerHTML = 
    ""
    document.getElementById("year").style.borderColor="green";
    document.getElementById("year").style.borderstyle="solid";
  }
}
inputYear.addEventListener("input", updateYear);

//Process for CVC 
const inputCVC = document.getElementById("cvc");
const updateCVC = () =>{
  const inputvalue = inputCVC.value;
  document.getElementById("pcvc").innerHTML = inputvalue;
  if(inputvalue.length < 4 ){
    document.getElementById("errorcvc").innerHTML = 
    "Wrong Format!"
    document.getElementById("cvc").style.borderColor="red";
    document.getElementById("cvc").style.borderstyle="solid";
  }
  else{
    document.getElementById("errorcvc").innerHTML = 
    ""
    document.getElementById("cvc").style.borderColor="green";
    document.getElementById("cvc").style.borderstyle="solid";
  }

}
inputCVC.addEventListener("input" , updateCVC);
$(document).ready(function () {
  $(".container2").hide();
  $(".btn").click(function(){
    $(".block-2").hide(300);
    $(".container2").show(300);
  })
  $(".button4").click(function(){
    $(".block-2").show(200);
    $(".container2").hide(300);
  })
});