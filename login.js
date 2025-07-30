document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
var email = document.querySelector('.email').value;
    var password = document.querySelector('.pass').value;
     if (email === 'example@example.com' && password === 'password') {
       alert('Login successful!'); 
   } else {
      alert('Invalid email or password. Please try again.');
    }
});