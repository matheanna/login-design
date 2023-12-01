//toggle password
const passwordInput = root.querySelector('#password');
    const togglePassword = root.querySelector('#toggle-password');

    togglePassword.addEventListener('click', () => {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);

        // toggle icon
        if(togglePassword.classList.contains('fa-eye-slash')){
            togglePassword.classList.add('fa-eye')
            togglePassword.classList.remove('fa-eye-slash');
        }else if(togglePassword.classList.contains('fa-eye')){
            togglePassword.classList.add('fa-eye-slash');
            togglePassword.classList.remove('fa-eye')
        }
    });
