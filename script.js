// GET COACH NAME FROM URL
const params = new URLSearchParams(window.location.search);

const coach = params.get("coach");

const coachName = document.getElementById("coachName");

if (coach && coachName) {
    coachName.innerText = "You are booking Coach " + coach + " 💪";
}


// FEEDBACK FORM
const feedbackForm = document.getElementById("feedbackForm");

if (feedbackForm) {
    feedbackForm.addEventListener("submit", function(e) {
        e.preventDefault();

        alert("Thank you for your feedback!");

        feedbackForm.reset();
    });
}


// BOOKING FORM
const bookingForm = document.getElementById("bookingForm");

if (bookingForm) {
    bookingForm.addEventListener("submit", function(e) {
        e.preventDefault();

        alert("Booking submitted successfully!");

        bookingForm.reset();
    });
}