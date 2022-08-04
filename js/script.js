let names = document.getElementById("inpName");
let email = document.getElementById("inpEmail");
let phone = document.getElementById("inpPhone");
let country = document.getElementById("inpCountry");
let address = document.getElementById("txtAreaAdj");
let city = document.getElementById("inpCity");
let state = document.getElementById("drop-down3");
let zip = document.getElementById("inpZip");

let cardholder = document.getElementById("inpCardholder");




//let name = document.getElementById("inpName");

function validateInput(){
    let nameval = names.value.trim();
    let cardname = cardholder.value.trim();
   
    if(nameval === "" && cardname == "") {
     onError(names);
     onError(cardholder);
     window.alert("Input required");
    } else if (nameval === "") {
        onError(names);
        onSuccess(cardholder);
        window.alert("Billing Details required");
    }
    else if(cardname ==="") {
        onSuccess(names);
        onError(cardholder);
        window.alert("Payment Details required");
    }

    else  {
        onSuccess(names);
        onSuccess(cardholder);
        message();
    }

  
}





function message() {
        window.alert("Thank you for your donation");
    }





document.querySelector(".btn").addEventListener("click",(event)=> {
  event.preventDefault();
    validateInput();
 
 
});
 

function onSuccess(input) {

    let parent = input.parentElement;
    parent.classList.remove("error");
    parent.classList.add("success");
   

}

function onError(input) {
    let parent = input.parentElement;
    parent.classList.add("error");
    parent.classList.remove("success");
}

