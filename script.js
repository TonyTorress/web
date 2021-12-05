
    var d1 = "va.csv";
    Plotly.d3.csv(d1, function(err, rows){
    function unpack(rows, key) {
        return rows.map(function(row) { return row[key]; });
    }
    var t1 = {
    type: "scatter",
    mode: "lines",
    name: 'CO Total Deaths',
    x: unpack(rows, 'Date'),
    y: unpack(rows, 'CODATA.Death'),
    line: {color: '#21A216'}
}
    var t2 = {
    type: "scatter",
    mode: "lines",
    name: 'CO Confirmed Deaths',
    x: unpack(rows, 'Date'),
    y: unpack(rows, 'CODATA.DeathConfirmed'),
    line: {color: '#CA1B0D'}
}
    var data = [t1,t2];
    var layout = {
    title: 'Custom: CO Total Deaths and Confirmed Deaths',
};
    Plotly.newPlot('myplot', data, layout);
})
