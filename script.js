
// WhatsApp Form
function sendToWhatsApp() {
let name = document.getElementById("name").value;
let studentClass = document.getElementById("class").value;
let course = document.getElementById("course").value;
let phone = document.getElementById("phone").value;

let message = `New Enquiry:%0AName: ${name}%0AClass: ${studentClass}%0ACourse: ${course}%0APhone: ${phone}`;

window.open(`https://wa.me/919506054813?text=${message}`, "_blank");
}

// Popup Form
function sendPopup(){
let name = document.getElementById("pname").value;
let studentClass = document.getElementById("pclass").value;
let phone = document.getElementById("pphone").value;

let msg = `New Student:%0AName: ${name}%0AClass: ${studentClass}%0APhone: ${phone}`;

window.open(`https://wa.me/919506054813?text=${msg}`, "_blank");
}

// Popup auto open
setTimeout(()=>{
document.getElementById("popupForm").style.display="flex";
},4000);

function closePopup(){
document.getElementById("popupForm").style.display="none";
}

// Counter Animation
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
