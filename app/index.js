'use strict';

const express = require('express');

function mySlowFunction(baseNumber) {
	let result = 0;	
	for (var i = Math.pow(baseNumber, 7); i >= 0; i--) {		
		result += Math.atan(i) * Math.tan(i);
	};
}

const app = express();

app.get('/longrunning', (req, res) => {
    // Simply wait for 5 seconds before returning.
    // Simulating some long but CPU inexpensive operation.
    const sleep = 5000;
    setTimeout(() => {
        res.status(200).send().end();
    }, sleep)
});

app.get('/highcpu', (req,res)=>{
    // Does some CPU expensive operation
    mySlowFunction(10);
    res.status(200).send().end();
});

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});

module.exports = app;