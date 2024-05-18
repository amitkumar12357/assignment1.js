/*********************************************************************************
* Name: Amit kumar
* Student ID: 160904231
* Date: 18 May 2024

* WEB700 – Assignment 1
* I declare that this assignment is my own work in accordance with Seneca Academic Policy.
* No part of this assignment has been copied manually or electronically from any other source
* (including web sites) or distributed to other students.
*
********************************************************************************/

// Creating 3 arrays
const serverVerbs = ["GET", "GET", "GET", "POST", "GET", "POST"];
const serverPaths = ["/", "/about", "/contact", "/login", "/panel", "/logout"];
const serverResponses = [
    "Welcome to WEB700 Assignment 1",
    "This assignment was prepared by Amit kumar",
    "Amit kumar: akumar252@myseneca.ca",
    "User Logged In",
    "Main Panel",
    "Logout Complete"
];

//Creating the "web server simulator"Function 

//Define handleRequest Function:
function httpRequest(Verb, path) {
    for (let i = 0; i < serverPaths.length; i++) {  //initialization, stop, updatation
        if (serverVerbs[i] === Verb && serverPaths[i] === path) {
            return `200: ${serverResponses[i]}`;
        }
    }
    return `404: Unable to process ${Verb} request for ${path}`;
}

// Manually test (with httpRequest function)
console.log(httpRequest("GET", "/")); // 200: Welcome to WEB700 Assignment 1
console.log(httpRequest("GET", "/about")); //200: This assignment was prepared by Amit kumar
console.log(httpRequest("GET", "/contact")); //200: Student Name: Amit kumar, Student Email: akumar252@myseneca.ca
console.log(httpRequest("POST", "/login")); // 200: User Logged In
console.log(httpRequest("GET", "/panel")); // 200: Main Panel
console.log(httpRequest("POST", "/logout")); // 200: Logout Complete

//Manually, mismatches to trigger 404
console.log(httpRequest("GET", "/unknown")); // 404: Unable to process GET request for /unknown
console.log(httpRequest("PUT", "/")); //  404: Unable to process PUT request for /


//Automating the Tests by creating a "automateTests" Function

// It's used to randomly select elements from arrays.
function getRandomInt(maxi) {
    return Math.floor(Math.random() * maxi); //generates a random integer between 0 (inclusive) and max - 1 (inclusive).
}

// Define a function which continuously invoke httpRequest (with random requests)
function automateTests() {
    const testVerbs = ["GET", "POST"];
    const testPaths = ["/", "/about", "/contact", "/login", "/panel", "/logout", "/randomPath1", "/randomPath2"];

    // Define a function (generate random httpRequests)
    function randomRequest() {
        const randVerb = testVerbs[getRandomInt(testVerbs.length)];
        const randPath = testPaths[getRandomInt(testPaths.length)];
        console.log(httpRequest(randVerb, randPath));  //call the httpRequest function
    }
// Execute randomRequest every 1 second 
    setInterval(randomRequest, 1000);
}

//calling function
automateTests();

