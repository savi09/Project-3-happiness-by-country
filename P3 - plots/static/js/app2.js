d3.json('/data'), function(err, rows){
    function unpack(rows, key) {
        return rows.map(function(row) { return row[key]; });
    }

    //defining variable
    let life_expec = rows.happiness.map(x => x.life_expectancy);
    let h_score= rows.happiness.map(x => x.happines_score);
    let Region= rows.happiness.map(x => x.life_expectancy);


// d3.json('/data').then(function (myData) {
//     console.log('Year')
//     console.log(myData)
//     // var five_results = myData.map(happiness => happiness.year);
//     // var happy_score = myData.happiness.map(x => x.happiness_score);
//     // var happy_country = myData.happiness.map(x => x.Country);
//     var five_results = myData.happiness.filter(x => x.year == '2015');

//     var score = [];
//     var Region = [];
//     var lifee = [];
//     // var y2 = [];
//     for (var i = 0; i < five_results.length; i++) {
//         var h_score = five_results[i].happiness_score;
//         var rank = five_results[i].happiness_rank;
//         var h_Region = five_results[i].Region;
//         var l_expec = five_results[i].life_expectancy;
    
//             score.push(h_score);
//             Region.push(h_Region);
//             lifee.push()
//     }
//https://plotly.com/javascript/3d-scatter-plots/

var trace1 = {
x: Region,
y: h_score,
z: life_expec,
marker: {
    size: 2,
    color: unpack(rows, 'Elev'),
    colorscale: 'Reds',
    line: {color: 'transparent'}
},
mode: 'markers',
type: 'scatter3d',
text: unpack(rows, 'Country'),
hoverinfo: 'x+y+z+text',
showlegend: false
};

// var x = unpack(rows, 'Elev');

// var trace2 = {
//     x: unpack(rows, 'Elev'),
//     type: 'histogram',
//     hoverinfo: 'x+y',
//     showlegend: false,
//     xaxis: 'x2',
//     yaxis: 'y2',
//     marker: {
//         color: 'red'
//     }};

// var trace3 = {
//     geo: 'geo3',
//     type:'scattergeo',
//     locationmode: 'world',
//     lon: unpack(rows, 'Longitude'),
//     lat: unpack(rows, 'Latitude'),
//     hoverinfo:  'text',
//     text:  unpack(rows, 'Elev'),
//     mode: 'markers',
//     showlegend: false,
//     marker: {
//     size: 4,
//     color: unpack(rows, 'Elev'),
//     colorscale: 'Reds',
//     opacity: 0.8,
//     symbol: 'circle',
//     line: {
//         width: 1
//     }
//     }
// };

var data = [trace1];

var layout = {
    paper_bgcolor: 'black',
    plot_bgcolor: 'black',
    title: 'Volcano Database: Elevation',
    font: {color: 'white'},
    colorbar: true,
    annotations: [{
        x: 0,
        y: 0,
        xref: 'paper',
        yref: 'paper',
        text: 'Source: NOAA',
        showarrow: false
    }],
    // geo3: {
    //     domain: {
    // x: [0, 0.45],
    // y: [0.02, 0.98]
    //     },
    //     scope: 'world',
    //     projection: {
    //     type: 'orthographic'
    //     },
    //     showland: true,
    //     showocean: true,
    //     showlakes: true,
    //     landcolor: 'rgb(250,250,250)',
    //     lakecolor: 'rgb(127,205,255)',
    //     oceancolor: 'rgb(6,66,115)',
    //     subunitcolor: 'rgb(217,217,217)',
    //     countrycolor: 'rgb(217,217,217)',
    //     countrywidth: 0.5,
    //     subunitwidth: 0.5,
    //     bgcolor: 'black'
    // },
    // scene: {domain: {
    // x: [0.55, 1],
    // y: [0, 0.6]
    // },
        xaxis: {title: 'Status',
                showticklabels: false,
                showgrid: true,
                gridcolor: 'white'},
        yaxis: {title: 'Type',
                showticklabels: false,
                showgrid: true,
                gridcolor: 'white'},
        zaxis: {title: 'Elev',
                showgrid: true,
                gridcolor: 'white'}
            
    }
    Plotly.newPlot("myDiv", data, layout, {showLink: false});

};
//     yaxis2: {
//         anchor: 'x2',
//     domain: [0.7, 1],
//     showgrid: false
//     },
//     xaxis2: {
//     tickangle: 45,
//     anchor: 'y2',
//     ticksuffix: 'm',
//     domain: [0.6, 1]},
// };

    // Plotly.newPlot("myDiv", data, layout, {showLink: false});
