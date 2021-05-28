function urlData(){
    console.log("full url address: " + location.href);
    console.log("host name: " + location.hostname);
    console.log("used protocol: " + location.protocol);
    console.log("requestParams: " + location.search);
}

urlData()

function reloadPage() {
    location.reload();
}

function redirectPage(address) {
    location.assign(address);
}

var obj = {
    test: "abc",
    testF: function() {
        console.log("Object function");
        console.log(screen.availWidth);
        console.log(screen.availHeight);
    }
}

newFunction = function() {
    console.log("this is a new function");
    var innerObj = {
        a: "Return param a"
    }

    localStorage.setItem("name", "Nikola Alic");
    console.log(localStorage.getItem("name"));

    return innerObj;
}

console.log(window.newFunction());

window.obj.testF();

function navigatorInfo() {
    console.log(navigator.platform);
    console.log(navigator.onLine);
    console.log(navigator.vendor);
    console.log(navigator.userAgent);
}

navigatorInfo();

function openCloseGoogle() {
    var google = window.open("https://www.google.com");
    
    setTimeout(()=> {
        google.close();
    }, 4000);
}

openCloseGoogle();