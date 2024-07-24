document.querySelector('.nav-toggle').addEventListener('click', function() {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('active');
});

document.getElementById('surveyForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Display the thank you message
    document.getElementById('message').classList.remove('hidden');

    // Redirect to the counselor page after 3 seconds
    setTimeout(function() {
        window.location.href = 'counselor.html';
    }, 3000); // Adjust the delay as needed
});
