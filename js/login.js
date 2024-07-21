function validateForm() {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    
    button.addEventListener("onclick")
    if (email === '' || password === '') {
        
        return false;
    }Swal.fire("SweetAlert2 is working!");

    // Add further validation if necessary
    // Example: Check for minimum length, specific characters, etc.

    // If validation passes
    
    
    return true;
}