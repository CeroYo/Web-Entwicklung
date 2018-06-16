const express = require("express");

let server = express();

const fs = require("fs");

const PORT = 8080;

let htmlData = "";
let cssData = "";
let jsData = "";

try {
    htmlData = fs.readFileSync("../../webapp/dist/index.html");
    htmlData = htmlData.toString();
    console.log(htmlData);

    cssData = fs.readFileSync("../../webapp/dist/style.css");
    cssData = cssData.toString();
    console.log(cssData);

    jsData = fs.readFileSync("../../webapp/dist/main.js");
    jsData = jsData.toString();
    console.log(jsData);
}
catch(error) {
    console.error(error);
}

server.get("/", (request, response) => {
    response.send(htmlData, cssData, jsData);
})

//Zum testen von verschiedenen GET-Anfragen
server.get("/json", (request, response) => {
    response.json({
        message: "Hello, World!",
        success: true
    });
});

//Zum testen von verschiedenen GET-Anfragen
server.get("/XXX", (request, response) => {
    response.sendStatus(404);
});

server.listen(PORT, () => {console.log("HTTP Server listening on port %d.", PORT)});