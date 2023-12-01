//move placeholders up
document.addEventListener('DOMContentLoaded', function () {
    const usernameInput = root.querySelector('#username');
    const passwordInput = root.querySelector('#password');

    function handleInputFocus(input) {
        input.addEventListener('input', function () {
            if (input.value.trim() !== '') {
                input.classList.add('form-input-filled');
            } else {
                input.classList.remove('form-input-filled');
            }
        });
    }

    handleInputFocus(usernameInput);
    handleInputFocus(passwordInput);
});