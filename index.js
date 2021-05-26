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