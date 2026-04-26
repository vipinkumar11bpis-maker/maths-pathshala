// COUNTER FIX (only when visible)
let counters = document.querySelectorAll(".count");

let startCounter = () => {
counters.forEach(counter => {
let update = () => {
let target = +counter.getAttribute("data-target");
let count = +counter.innerText;

let inc = target / 80;

if(count < target){
counter.innerText = Math.ceil(count + inc);
setTimeout(update,20);
}else{
counter.innerText = target;
}
}
update();
});
}

// trigger when scroll
window.addEventListener("scroll", () => {
let section = document.querySelector(".counter-section");
if(section.getBoundingClientRect().top < window.innerHeight){
startCounter();
}
});

/* POPUP */
function openPopup(){
document.getElementById("popupForm").style.display="flex";
}

function closePopup(){
document.getElementById("popupForm").style.display="none";
}

// auto open after 5 sec
setTimeout(openPopup,5000);

// auto close after 12 sec
setTimeout(closePopup,17000);

// WhatsApp
function sendPopup(){
let name = document.getElementById("pname").value;
let studentClass = document.getElementById("pclass").value;
let phone = document.getElementById("pphone").value;

let msg = `New Enquiry:%0AName: ${name}%0AClass: ${studentClass}%0APhone: ${phone}`;

window.open(`https://wa.me/919506054813?text=${msg}`);
closePopup();
}
