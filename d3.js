var margin = {top: 20, right: 20, bottom: 30, left: 40},
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

var x = d3.scale.linear()
    .domain([0, width / 2])
    .range([0, width]);

var y = d3.scale.linear()
    .domain([0, height / 2])
    .range([0, height]);

var xAxis = d3.svg.axis()
    .scale(x)
    .orient("top")
    .ticks(25)
    .tickSize(-height);

var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left")
    .ticks(25)
    .tickSize(-width);

var zoom = d3.behavior.zoom()
    .x(x)
    .y(y)
    .scaleExtent([1, 2])
    .on("zoom", zoomed);

var svg = d3.select("body").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)    
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
    
    .on('click',criaQuadrado)
    .call(zoom);

svg.append("rect")
    .attr("width", width)
    .attr("height", height)
    



svg.append("g")
    .attr("class", "x axis")
    .call(xAxis)
    

svg.append("g")
    .attr("class", "y axis")
    .call(yAxis)
    



function zoomed() {
    svg.select(".x.axis").call(xAxis);
    svg.select(".y.axis").call(yAxis);
    //svg.select(".quadrado").call(criaQuadrado)
}

function criaQuadrado(){    
    debugger;
    var event = d3.mouse(this);    
    svg.append('rect')
    .attr('class','quadrado')
    .attr('x',event[0])
    .attr('y',event[1])
    .attr('width',x(30))
    .attr('height',y(50))
    .style('fill','blue' )
    //.call(zoom)
}
