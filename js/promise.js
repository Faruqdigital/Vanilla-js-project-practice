
const headLine = document.getElementById("root");
headLine.innerHTML = `<h1><u>Promise</u></h1>`;

const marks = 80;
const payment = true;

function enroll() {
    const promise = new Promise(function (resolve, reject) {
        console.log("BSc Course enrollemnt is in process");
        setTimeout(function () {
            if (payment) {
                resolve();
            } else {
                reject("Payment is Failed!");
            }
        }, 2000);
    });
    return promise;
}

function admission() {
    const promise = new Promise(function (resolve, reject) {
        console.log("Admission on progress");
        setTimeout(function () {
            if (marks >= 85) {
                resolve();
            } else {
                reject("You could not get enough marks to admit into this institution");
            }
        }, 3000);
    });
    return promise;
}

function seatBooking() {
    const promise = new Promise(function (resolve) {
        console.log("Date of seatbooking has been published");

        setTimeout(function () {
            resolve("Congrats! You got admitted in University!");
        }, 1000);
    });
    return promise;
}

// way of promise Callback

enroll().then(admission)
    .then(seatBooking)
    .then(function (value) { // Resolve Value
        console.log(value);
    })
    .catch(function (err) {  // Reject Value
        console.log(err)
    });