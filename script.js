// COUNTER
let counters = document.querySelectorAll(".count");

counters.forEach(counter => {
let update = () => {
let target = +counter.getAttribute("data-target");
let count = +counter.innerText;

let inc = target / 100;

if(count < target){
counter.innerText = Math.ceil(count + inc);
setTimeout(update,20);
}
else{
counter.innerText = target;
}
}
update();
});

// POPUP OPEN
function openPopup(){
document.getElementById("popupForm").style.display="flex";
}

// CLOSE
function closePopup(){
document.getElementById("popupForm").style.display="none";
}

// AUTO OPEN AFTER 4s
setTimeout(openPopup,4000);

// AUTO CLOSE AFTER 10s
setTimeout(closePopup,14000);

// WHATSAPP
function sendPopup(){
let name = document.getElementById("pname").value;
let studentClass = document.getElementById("pclass").value;
let phone = document.getElementById("pphone").value;

let msg = `New Student:%0AName:${name}%0AClass:${studentClass}%0APhone:${phone}`;

window.open(`https://wa.me/919506054813?text=${msg}`);
closePopup();
}
