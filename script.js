let url =
	"https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/cyclist-data.jsong";
// XMLHttp request
let req = new XMLHttpRequest();

let values = [];
// Create x-axis
let xScale;
// Creat y-axis
let yScale;

let width = 800;
let height = 600;
let padding = 40;

// Returns svg element in html
let svg = d3.select(svg);
// draws canvas with dimension that we set
let drawCanvas = () => {
	svg.attr("width", width);
	svg.attr("height", height);
};

// generates x and y scales
let generateScales = () => {};

// Plot circle dot piont
let drawPoint = () => {};
// draws the x and y axis unto graph
let generateAxes = () => {};
