import React from 'react';
import CanvasJSReact from '../../canvasjs.react.js';
import "../../css/global.css";

var Component = React.Component;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
var dps = [{x: 1, y: [36.61, 38.45, 36.19, 36.82]}, {x: 2, y: [36.82, 36.95, 34.84, 36.20]}, {x: 3, y: [35.85, 36.30, 34.66, 36.07]}, {x: 4, y: [36.19, 37.50, 35.21, 36.15]}, {x: 5, y: [36.11, 37.17, 35.02, 36.11]},{x: 6, y: [36.12, 36.57, 33.34, 33.74]}, {x: 7, y: [33.51, 35.86, 33.23, 35.47]}, {x: 8, y: [35.66, 36.70, 34.38, 35.07]}, {x: 9, y: [35.24, 38.15, 34.93, 38.08]}, {x: 10, y: [38.12, 45.80, 38.08, 45.49] }];   //dataPoints.
var xVal = dps.length + 1;
var yVal1 = 44.73;
var yVal2 = 47.64;
var yVal3 = 42.67;
var yVal4 = 46.16;
var updateInterval = 1000;


class HVSE extends Component {
	constructor() {
		super();
		this.updateChart = this.updateChart.bind(this);
	}
	componentDidMount() {
		setInterval(this.updateChart, updateInterval);
	}
	updateChart() {
		yVal1 = yVal1 +  1 + Math.random() *(-1-1);
		yVal2 = yVal1 +  1 + Math.random() *(-1-1);
		yVal3 = yVal3 +  1 + Math.random() *(-1-1);
		yVal4 = yVal3 +  1 + Math.random() *(-1-1);
		dps.push({x: xVal,y: [yVal1, yVal2, yVal3, yVal4]});
		xVal++;
		this.chart.render();
	}
	render() {
		const options = {
		  theme: 'light2',
		  axisX:{
   labelFontColor: 'var(--bg)',
 },
      axisY:{
   labelFontColor: 'var(--bg)',
 },
			animationEnabled: false,
			exportEnabled: false,
			interactivityEnabled: false,
			data: [{
				showInLegend: false,
				type: "candlestick",
				dataPoints : dps,
				risingColor: "lightgreen",
		    fallingColor: "red",
			}]
		}
		return (
		<div><CanvasJSChart options = {options} onRef={ref => this.chart = ref}/></div>
		);
	}
};

export default HVSE;
