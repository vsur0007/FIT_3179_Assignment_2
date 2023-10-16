window.onload = function () {
  var viz_1 = "Maps_with_graphs.json";
  var viz_2 = "Histogram_Chart.json";
  var viz_3 = "Scatter_Plot.json";
  var viz_4 = "Heat_Maps.json";

  vegaEmbed("#mapncharts", viz_1).then(function (result) {}).catch(console.error);
  vegaEmbed("#barchart", viz_2).then(function (result) {}).catch(console.error);
  vegaEmbed("#plotchart", viz_3).then(function (result) {}).catch(console.error);
  vegaEmbed("#heatmap", viz_4).then(function (result) {}).catch(console.error);
};
