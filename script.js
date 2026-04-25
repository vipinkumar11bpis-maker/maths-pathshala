function sendToWhatsApp() {
    let name = document.getElementById("name").value;
    let studentClass = document.getElementById("class").value;
    let course = document.getElementById("course").value;
    let subject = document.getElementById("subject").value;

    let message = `New Admission Request:
Name: ${name}
Class: ${studentClass}
Course: ${course}
Subject: ${subject}`;

    let url = "https://wa.me/919506054813?text=" + encodeURIComponent(message);

    window.open(url, "_blank");
}
