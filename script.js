// 🔥 COUNTER (runs once only)
let started = false;

window.addEventListener("scroll", () => {
let section = document.querySelector(".counter-section");

if(!started && section.getBoundingClientRect().top < window.innerHeight){
started = true;

document.querySelectorAll(".count").forEach(counter => {
let target = +counter.dataset.target;
let count = 0;

let update = () => {
count += target / 80;

if(count < target){
counter.innerText = Math.ceil(count);
requestAnimationFrame(update);
}else{
counter.innerText = target;
}
};

update();
});
}
});

// 🔥 POPUP CONTROL
function openPopup(){
document.getElementById("popupForm").style.display = "flex";
}

function closePopup(){
document.getElementById("popupForm").style.display = "none";
}

// auto open (smart delay)
setTimeout(() => {
openPopup();
}, 6000);

// auto close
setTimeout(() => {
closePopup();
}, 18000);

// 🔥 WHATSAPP MAIN FORM
function sendToWhatsApp() {
let name = document.getElementById("name").value;
let studentClass = document.getElementById("class").value;
let course = document.getElementById("course").value;
let phone = document.getElementById("phone").value;

let message = `New Enquiry:%0AName: ${name}%0AClass: ${studentClass}%0ACourse: ${course}%0APhone: ${phone}`;

window.open(`https://wa.me/919506054813?text=${message}`, "_blank");
}

// 🔥 POPUP FORM
function sendPopup(){
let name = document.getElementById("pname").value;
let studentClass = document.getElementById("pclass").value;
let phone = document.getElementById("pphone").value;

let msg = `New Student:%0AName: ${name}%0AClass: ${studentClass}%0APhone: ${phone}`;

window.open(`https://wa.me/919506054813?text=${msg}`, "_blank");
closePopup();
}
