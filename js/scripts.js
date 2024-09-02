document.getElementById('signUpForm')?.addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Sign Up Successful!');
    window.location.href = 'index.html';
});

document.getElementById('signInForm')?.addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Sign In Successful!');
    window.location.href = 'index.html';
});