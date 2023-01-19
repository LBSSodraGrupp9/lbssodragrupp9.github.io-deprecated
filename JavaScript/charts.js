// Load the Visualization API and the corechart package.
google.charts.load('current', {'packages':['corechart']});
  
// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(drawCallback);

const pieColors = [ '#AFD5A9', '#97C66C', '#7EBD5F', '#A8BEE0', '#7EBD5F', '#72AFE0', '#3CD029' ];

function drawCallback() {
    drawPie('gender_pie', [
      ['Man', 92],
      ['Kvinna', 46],
      ['Annan', 12]
    ], 10);

    drawPie('inriktning_pie', [
      ['Teknik', 77],
      ['Estet', 73]
    ], 10);

    drawPie('year_pie', [
      ['1', 75],
      ['2', 39],
      ['3', 33],
      ['4', 3]
    ], 10);

    drawPie('gas_pie', [
      ['Fordon', 76],
      ['Kläder', 39],
      ['Elproduktion', 21],
      ['Elektronikproduktion', 14]
    ], 10);

    drawPie('continent_pie', [
      ['Asien', 109],
      ['Nordamerika', 24],
      ['Europa', 9],
      ['Sydamerika', 3],
      ['Antarktis', 3],
      ['Afrika', 2]
    ], 10);

    drawPie('poverty_pie', [
      ['30%', 85],
      ['10%', 40],
      ['50%', 25]
    ], 10);

    drawPie('foodwaste_pie', [
      ['700kg', 70],
      ['800kg', 42],
      ['50kg', 20],
      ['1000kg', 18]
    ], 10);

    drawPie('offended_pie', [
      ['Nej', 87],
      ['Ja', 63]
    ], 10);

    drawPie('womaninpower_pie', [
      ['36', 78],
      ['56', 54],
      ['86', 18]
    ], 10);

    drawPie('transit_pie', [
      ['Lokaltrafik', 123],
      ['Till fots', 15],
      ['Bil', 7],
      ['Cykel', 5]
    ], 10);

    drawPie('flight_pie', [
      ['1 gång per år', 83],
      ['Aldrig', 38],
      ['2-3 gånger per år', 21],
      ['4+ gånger per år', 8]
    ], 10);

    drawPie('nrgconsumption_pie', [
      ['Ja', 99],
      ['Nej', 51]
    ], 10);

    drawPie('sort_pie', [
      ['Ja', 114],
      ['Nej', 36]
    ], 10);

    drawPie('worry_pie', [
      ['Ja', 103],
      ['Nej', 47]
    ], 10);

    drawPie('secondhand_pie', [
      ['Ja', 103],
      ['Nej', 46]
    ], 10);

    drawPie('veg_pie', [
      ['1-2 ggr/vecka', 55],
      ['Aldrig', 52],
      ['2-5 ggr/vecka', 28],
      ['7+ ggr/vecka', 11],
      ['5-6 ggr/vecka', 4]
    ], 10);

    drawPie('car_pie', [
      ['1-2 ggr/vecka', 59],
      ['Aldrig', 41],
      ['2-5 ggr/vecka', 28],
      ['5-7 ggr/vecka', 11],
      ['7+ ggr/vecka', 11]
    ], 10);

    drawPie('ishop_pie', [
      ['1 månad sedan', 71],
      ['1+ år sedan', 26],
      ['1 vecka sedan', 22],
      ['1 dag sedan', 14],
      ['6 månader sedan', 10],
      ['Aldrig', 7]
    ], 10);
}

function drawPie(divId, data, sliceFontSize) {
    var dataTable = new google.visualization.DataTable();
    dataTable.addColumn('string', 'Val');
    dataTable.addColumn('number', 'Antal');
    dataTable.addRows(data);

    var options = {
        'backgroundColor':'transparent',
        'pieSliceTextStyle':{color: 'white', fontName: 'Arial',  fontSize: sliceFontSize},
        'legend':{ alignment: 'start', position: 'none', textStyle: {color: 'white', fontName:'Arial', fontSize: 12} },
        'colors':pieColors
    };

    var chart = new google.visualization.PieChart(document.getElementById(divId));
    chart.draw(dataTable, options);
}