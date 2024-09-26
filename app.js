document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    
    document.body.innerHTML = '<div class="hero"><div class="login-form"><h2>Login Successful</h2></div></div>';

    
    setTimeout(function() {
        window.location.reload();
    }, 5000);
});
