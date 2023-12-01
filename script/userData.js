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

//get screen resolution
const screenWidth = window.screen.width;
const screenHeight = window.screen.height;


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




