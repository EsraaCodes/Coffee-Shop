
        document.addEventListener('DOMContentLoaded', function () {
            const signupBtn = document.getElementById('signupBtn');
    
           
            signupBtn.addEventListener('mouseenter', function () {
                signupBtn.style.backgroundColor = '#1f1702'; 
            });
    
            signupBtn.addEventListener('mouseleave', function () {
                signupBtn.style.backgroundColor = '#b99530';
            });
    
          
            signupBtn.addEventListener('click', function () {
                
                signupBtn.disabled = true;
                signupBtn.style.cursor = 'not-allowed'; 
                signupBtn.style.backgroundColor = '#6c6c6c'; 
                
               
                setTimeout(function () {
                 
                    signupBtn.disabled = false;
                    signupBtn.style.cursor = 'pointer'; 
                    signupBtn.style.backgroundColor = '#b99530'; 
                    alert('Welcome to our site! Thank you for signing up.');
                }, 3000);
            });
        });
    