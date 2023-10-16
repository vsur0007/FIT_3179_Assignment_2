// script.js
var viz_1 = "Maps_with_graphs.json";
var viz_2 = "Histogram_Chart.json";
var viz_3 = "Scatter_Plot.json";
var viz_4 = "Heat_Maps.json";

vegaEmbed("#mapncharts", viz_1,{renderer: "svg", actions: false}).then(function (result) {
    // Access the Vega view instance(https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

vegaEmbed("#barchart", viz_2,{renderer: "svg", actions: false}).then(function (result) {
    // Access the Vega view instance(https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

vegaEmbed("#plotchart", viz_3,{renderer: "svg", actions: false}).then(function (result) {
    // Access the Vega view instance(https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

vegaEmbed("#heatmap", viz_4,{renderer: "svg", actions: false}).then(function (result) {
    // Access the Vega view instance(https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);