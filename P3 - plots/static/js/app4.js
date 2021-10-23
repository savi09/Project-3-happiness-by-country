d3.json('/data').then(function (myData) {
    console.log('Year')
    console.log(myData)
    // var five_results = myData.map(happiness => happiness.year);
    // var happy_score = myData.happiness.map(x => x.happiness_score);
    // var happy_country = myData.happiness.map(x => x.Country);
    var five_results = myData.happiness//.filter(x => x.year == '2015');

    var score = [];
    var Region = [];
    var life_e = [];
    //var h_rank = [];
    for (var i = 0; i < five_results.length; i++) {
        var h_score = five_results[i].happiness_score;
        //var rank = five_results[i].happiness_rank;
        var h_Region = five_results[i].Region;
        var l_expec = five_results[i].life_expectancy;
    
            score.push(h_score);
            Region.push(h_Region);
            life_e.push(l_expec);
            //h_rank.push(rank)

    }
        var trace1 = {
        type: 'scatter',
        x: Region,
        y: [10, 15, 13, 17],
        mode: 'lines',
        name: 'Red',
        line: {
            color: 'rgb(219, 64, 82)',
            width: 3
        }
        };
        
        trace2 = {
        type: 'scatter',
        x: [1, 2, 3, 4],
        y: [12, 9, 15, 12],
        mode: 'lines',
        name: 'Blue',
        line: {
            color: 'rgb(55, 128, 191)',
            width: 1
        }
        };
        
        var layout = {
        width: 500,
        height: 500
        };
        
        var data = [trace1, trace2];
        
        Plotly.newPlot('myDiv', data, layout);
        Plotly.newPlot('myDiv', data, layout);
    });