const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

function jsonParser(url) {
    const http = new XMLHttpRequest();

    http.open("GET", url, false);
    http.send();

    let body = http.responseText;
    return JSON.parse(body);
}

module.exports = {getJSON: jsonParser};