// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

var d3 = require('d3');

var limit = 10;
var result = '';
var resultDelimiter = '<br />';

for (var period = 1 ; period <= limit; period++)
{
    result = result.concat(period).concat(resultDelimiter); 
}
document.getElementById("divResult").innerHTML = result