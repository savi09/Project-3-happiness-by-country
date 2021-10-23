d3.json('/data').then(function (myData) {
    console.log('Year')
    console.log(myData)
    // var five_results = myData.map(happiness => happiness.year);
    // var happy_score = myData.happiness.map(x => x.happiness_score);
    // var happy_country = myData.happiness.map(x => x.Country);
    var five_results = myData.happiness//.filter(x => x.year == '2015');

    var score = [];
    var Region = [];
    // var y1 = [];
    // var y2 = [];
    for (var i = 0; i < five_results.length; i++) {
        var h_score = five_results[i].happiness_score;
        var rank = five_results[i].happiness_rank;
        var h_Region = five_results[i].Region;
        var l_expec = five_results[i].life_expectancy;
    
            score.push(h_score);
            Region.push(h_Region);
    }
        // console.log(score + " " + rank + " " + Region + " " + l_expec) 
        // console.log(score)

    var data = [
        {
            x: Region,
            y: score,
            type: 'bar'
        }
        ];
        Plotly.newPlot('myDiv', data);

    // var trace1 = {
    //     x: [Region],
    //     y: [score],
    //     name: 'control',
    //     autobinx: true, 
    //     histnorm: "count", 
    //     marker: {
    //         color: "rgba(255, 100, 102, 0.7)", 
    //         line: {
    //         color:  "rgba(255, 100, 102, 1)", 
    //         width: 1
    //         }
    //     },  
    //     opacity: 0.5, 
    //     type: "histogram", 
    //     // xbins: {
    //     //     end: 2.8, 
    //     //     size: 0.06, 
    //     //     start: .5
    //     // }
    //     };
    //     // var trace2 = {
    //     // x: x2,
    //     // y: y2, 
    //     // autobinx: false, 
    //     // marker: {
    //     //         color: "rgba(100, 200, 102, 0.7)",
    //     //             line: {
    //     //             color:  "rgba(100, 200, 102, 1)", 
    //     //             width: 1
    //     //     } 
    //     //         }, 
    //     // name: "experimental", 
    //     // opacity: 0.75, 
    //     // type: "histogram", 
    //     // xbins: { 
    //     //     end: 4, 
    //     //     size: 0.06, 
    //     //     start: -3.2
        
    //     // }
    //     };
    //     var data = [trace1];
    //     var layout = {
    //     bargap: 0.05, 
    //     bargroupgap: 0.2, 
    //     barmode: "overlay", 
    //     title: "Sampled Results", 
    //     xaxis: {title: "Value"}, 
    //     yaxis: {title: "Count"}
    //     };
    //     Plotly.newPlot('myDiv', data, layout);
    // // var happy_score = five_results[0].happiness_score;
    // var happy_country = five_results[0].Country;
    // console.log("five_results")
    // console.log(five_results)
    // console.log("happy_score")
    // console.log(happy_score)
    // console.log("happy_country")
    // console.log(happy_country)
//     var data = [{
//         type: ‘choropleth’,
//         locationmode: ‘country names’,
//         locations: happy_country,
//         z: happy_score,
//         text: happy_country,
    //     autocolorscale: true
    // }];
    // console.log(“data”)
    // console.log(data)
    // var layout = {
    //     title: ‘Happy Plot’,
    //     geo: {
    //     projection: {type: ‘robinson’}
    //     }
// };
    // Plotly.newPlot(“myDiv”, data, layout, {showLink: false});
    // plotly here 1 chart chart that is static, then add interactions
});