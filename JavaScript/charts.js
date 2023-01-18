// Load the Visualization API and the corechart package.
google.charts.load('current', {'packages':['corechart']});
  
// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(drawCallback);

const pieColors = [ '#AFD5A9', '#97C66C', '#7EBD5F', '#A8BEE0', '#7EBD5F', '#72AFE0', '#3CD029' ];

function drawCallback() {
    drawGenderPie();
}

// Callback that creates and populates a data table,
// instantiates the pie chart, passes in the data and
// draws it.
function drawGenderPie() {

  // Create the data table.
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Topping');
  data.addColumn('number', 'Slices');
  data.addRows([
    ['Man', 92],
    ['Kvinna', 46],
    ['Annan', 12]
  ]);

  // Set chart options
  var options = {
    'backgroundColor':'transparent',
    'pieSliceTextStyle':{color: 'white', fontName: 'Arial',  fontSize: 10},
    'fontName':'Myriad Pro',
    'legend':{ alignment: 'start', position: 'none', textStyle: {color: 'white', fontName:'Arial', fontSize: 12} },
    'colors':pieColors
  };

  // Instantiate and draw our chart, passing in some options.
  var chart = new google.visualization.PieChart(document.getElementById('gender_pie'));
  chart.draw(data, options);
}