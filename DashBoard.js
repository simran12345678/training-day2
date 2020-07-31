google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

// Draw the chart and set the chart values
function drawChart() {
  var data = google.visualization.arrayToDataTable([
  ['Electronics', 'Hours per Day'],
  ['MakeUp', 8],
  ['Jewellery', 7],
  ['Grocery', 4],
  ['Daily Essentials', 2],
  ['Stationary', 8]
]);

  // Optional; add a title and set the width and height of the chart
  var options = {'title':'Sales this week', 'width':550, 'height':400};

  // Display the chart inside the <div> element with id="piechart"
  var chart = new google.visualization.PieChart(document.getElementById('piechart'));
  chart.draw(data, options);
}
