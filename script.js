function sendToWhatsApp() {
    let number = "919506054813";
    let message = "New Inquiry from Maths Pathshala Website";
    let url = "https://wa.me/" + number + "?text=" + encodeURIComponent(message);
    window.open(url, '_blank');
}
