import { RadarChart } from './RadarChart.js'
import { BarChart } from './BarChart.js'
//Data
var d = [
	[ //2021
	  {axis:"Javascript",value:0.7},
	  {axis:"HTML/CSS",value:0.7},
	  {axis:"Graphic Design",value:0.2},
	  {axis:"Product Design",value:0.1},
	  {axis:"Product Mgmt",value:0.0},
	],[ //2020
	  {axis:"Javascript",value:0.5},
	  {axis:"HTML/CSS",value:0.5},
	  {axis:"Graphic Design",value:0.1},
	  {axis:"Product Design",value:0.7},
	  {axis:"Product Mgmt",value:0.6},
	],[ //2019
	  {axis:"Javascript",value:0.0},
	  {axis:"HTML/CSS",value:0.1},
	  {axis:"Graphic Design",value:0.2},
	  {axis:"Product Design",value:0.7},
	  {axis:"Product Mgmt",value:0.0},
	],[ //2018
	  {axis:"Javascript",value:0.0},
	  {axis:"HTML/CSS",value:0.1},
	  {axis:"Graphic Design",value:0.3},
	  {axis:"Product Design",value:0.5},
	  {axis:"Product Mgmt",value:0.7},
	],[ //2017
	  {axis:"Javascript",value:0.0},
	  {axis:"HTML/CSS",value:0.1},
	  {axis:"Graphic Design",value:0.0},
	  {axis:"Product Design",value:0.5},
	  {axis:"Product Mgmt",value:0.7},
	],[ //2016
	  {axis:"Javascript",value:0.0},
	  {axis:"HTML/CSS",value:0.1},
	  {axis:"Graphic Design",value:0.3},
	  {axis:"Product Design",value:0.7},
	  {axis:"Product Mgmt",value:0.0},
	],[ //2015
	  {axis:"Javascript",value:0.0},
	  {axis:"HTML/CSS",value:0.4},
	  {axis:"Graphic Design",value:0.1},
	  {axis:"Product Design",value:0.7},
	  {axis:"Product Mgmt",value:0.0},
	],[ //2014
	  {axis:"Javascript",value:0.0},
	  {axis:"HTML/CSS",value:0.7},
	  {axis:"Graphic Design",value:0.7},
	  {axis:"Product Design",value:0.0},
	  {axis:"Product Mgmt",value:0.0},
	]
  ];

export const makeRadarHappen = function(browserWidth) {
	console.log('makeRadarHappen with width ' + browserWidth)
	var w = browserWidth * .39,
		h = browserWidth * .39;
	
	//Options for the Radar chart, other than default
	var mycfg = {
	  w: w,
	  h: h,
	  maxValue: 0.7,
	  levels: 7,
	  ExtraWidthX: 300
	}
	
	//Call function to draw the Radar chart
	//Will expect that data is in %'s
	RadarChart.draw("#chart", d, mycfg);
}

export const makeBarChartHappen = function(index) {
	BarChart.draw('#barChart', d[index])
}
