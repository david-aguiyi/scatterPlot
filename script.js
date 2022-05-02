let url =
	"https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/cyclist-data.jsong";
// XMLHttp request
let req = new XMLHttpRequest();

let values = [];
// create x-axis
let xScale;
// creat y-axis
let yScale;

let width = 800;
let height = 600;
let padding = 40;

// returns svg element in html
let svg = d3.select(svg);
// draws canvas with dimension that we set
let drawCanvas = () => {
	svg.attr("width", width);
	svg.attr("height", height);
};

// generates x and y scales
let generateScales = () => {};
// plot circle dot piont
let drawPoint = () => {};
// draws the x and y axis unto graph
let generateAxes = () => {};

req.open("GET", url, true);
// runs once the request has been completed and there is a response
req.onload = () => {
	console.log(req.responseText);
};
req.send();
