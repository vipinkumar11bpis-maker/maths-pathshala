function sendToWhatsApp() {

let name = document.getElementById("name").value;
let studentClass = document.getElementById("class").value;
let course = document.getElementById("course").value;
let phone = document.getElementById("phone").value;

if(name === "" || studentClass === "" || phone === ""){
    alert("Please fill all details");
    return;
}

let number = "919506054813";

let message = `New Student Inquiry:
Name: ${name}
Class: ${studentClass}
Course: ${course}
Phone: ${phone}`;

let url = "https://wa.me/" + number + "?text=" + encodeURIComponent(message);

window.open(url, '_blank');
}
function sendToWhatsApp() {
let name = document.getElementById("name").value;
let studentClass = document.getElementById("class").value;
let course = document.getElementById("course").value;
let phone = document.getElementById("phone").value;

let message = `New Enquiry:%0AName: ${name}%0AClass: ${studentClass}%0ACourse: ${course}%0APhone: ${phone}`;

let url = `https://wa.me/919506054813?text=${message}`;

window.open(url, "_blank");
}
