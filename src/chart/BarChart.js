import * as d3 from 'd3'

//Original code from https://bl.ocks.org/hrecht/f84012ee860cb4da66331f18d588eee3

export const BarChart = {
    draw: function(id, d){
        d3.select("#barChartSvg").remove()
        //set up svg using margin conventions - we'll need plenty of room on the left for labels
        var margin = {
            top: 15,
            right: 25,
            bottom: 15,
            left: 0
        };

        var width = 200,
            height = 100;

        var svg = d3.select(id).append("svg")
            .attr("id", "barChartSvg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

        var x = d3.scaleLinear()
            .range([0, width])
            .domain([0, 0.7]);

        var y = d3.scaleBand()
            .domain(d.map(function (d) {
                return d.axis;}))
            .range([height, 0])
        //make y axis to show bar axis
        var yAxis = d3.axisLeft(y)
            .tickSize(0);

            
            var bars = svg.selectAll(".bar")
            .data(d)
            .enter()
            .append("g")
            
            //append rects
            bars.append("rect")
            .attr("class", "bar")
            .attr('fill-opacity', 0.5)
            .attr("y", function (d) {
                return y(d.axis);
            })
            .attr("height", (y.bandwidth(d.axis))*.8)
            .attr("x", 0)
            .attr("width", function (d) {
                return x(d.value);
            });
            
            var gy = svg.append("g")
                .attr("class", "y axis")
                .call(yAxis)
                .attr('text-anchor','start')
    }
}