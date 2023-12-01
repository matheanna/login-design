const userAgent = navigator.userAgent;
const platform = navigator.platform;

//find browser
function parseUserAgent(userAgentString) {
  const match = userAgentString.match(/(Chrome|Safari|Firefox|Edge)\/(\S+)/);
  return match
    ? { browser: match[1], version: match[2] }
    : { browser: "Unknown", version: "Unknown" };
}

const browserInfo = parseUserAgent(userAgent);
console.log(`Browser: ${browserInfo.browser} ${browserInfo.version}`);

//find operating system
const osMapping = {
    Win32: "Windows",
    Win64: "Windows",
    MacIntel: "Mac OS",
    MacPPC: "Mac OS",
    "Linux i686": "Linux",
    "Linux x86_64": "Linux",
};

const osInfo = osMapping[platform] || "Unknown";
console.log(`Operating System: ${osInfo}`);

//get screen resolution
const screenWidth = window.screen.width;
const screenHeight = window.screen.height;

console.log(`Screen Resolution: ${screenWidth} x ${screenHeight}`);


const root = document.getElementById("root");
//set browser
const browserElement = root.querySelector("#browser");
browserElement.innerHTML += `${browserInfo.browser} ${browserInfo.version}`;
//set os
const osElement = root.querySelector("#os");
osElement.innerHTML += osInfo;
//set resolution
const resolutionElement = root.querySelector("#resolution");
resolutionElement.innerHTML += ` ${screenWidth} x ${screenHeight}`;

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

//display qr codes
document.addEventListener('DOMContentLoaded', function () {
    const downloadBtn = root.querySelector('#download-btn');
    const formAndLogo = root.querySelector('#form-and-logo');
    const form = root.querySelector("#form-conatiner");
    const logo = root.querySelector("#logo-container");
    const qrCodes = root.querySelector('#qr-codes');

    downloadBtn.addEventListener('click', function () {
        formAndLogo.classList.toggle('expanded');
        form.classList.toggle('expanded');
        logo.classList.toggle('expanded');
        const isExpanded = formAndLogo.classList.contains('expanded');
        qrCodes.style.display = isExpanded ? 'flex' : 'none';
    });
});

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


