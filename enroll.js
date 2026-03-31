function validateEnrollForm(event) {
    event.preventDefault(); 

    let name = document.getElementById("enrollName").value.trim();
    let email = document.getElementById("enrollEmail").value.trim();
    let phone = document.getElementById("enrollPhone").value.trim();
    let course = document.getElementById("enrollCourse").value;
    let duration = document.getElementById("enrollDuration").value;

    if (name === "") {
        alert("Please enter your full name.");
        return false;
    }

    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        alert("Please enter a valid email address.");
        return false;
    }

    let phonePattern = /^[0-9]{10}$/; 
    if (phone == "" && !phone.match(phonePattern)) {
        alert("Please enter a valid 10-digit phone number.");
        return false;
    }

    if (course === "") {
        alert("Please select a course.");
        return false;
    }

    if (duration === "") {
        alert("Please select a course duration.");
        return false;
    }

    alert("Enrollment successful!");
    return true;
}

document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("enrollForm");
    form.addEventListener("submit", validateEnrollForm);
});