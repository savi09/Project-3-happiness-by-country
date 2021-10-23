d3.json('/data').then(function (myData) {
    console.log('Year')
    console.log(myData)


    // var five_results = myData.map(happiness => happiness.year);
    var l_expec = myData.happiness.map(x => x.life_expectancy);
    var happy_country = myData.happiness.map(x => x.Country);
    var five_results = myData.happiness
    var happy_country = myData.happiness.map(x => x.);

    // const highest = Math.max(five_results)
    console.log(five_results)

    //var score = [];
    var country = [];
    // var y1 = [];
    var h_rank = [];
    for (var i = 0; i < five_results.length; i++) {
        var h_score = five_results[i].happiness_score;
        var rank = five_results[i].happiness_rank;
        var h_country = five_results[i].Country;
        h_rank.push(rank)
        country.push(h_country)

        const highest = Math.max(h_rank);
        console.log(highest)

        const lowest = Math.min(h_rank)
        console.log(lowest)

        const co = five_results[i].country.filter(h_rank == highest);
        console.log()
        var l_expec = five_results[i].life_expectancy;
    
            //score.push(h_score);
            //Region.push(h_Region);
    }
        // console.log(score + " " + rank + " " + Region + " " + l_expec) 
        // console.log(score)
        const highest = Math.max(h_rank);
        console.log(highest)

        const lowest = Math.min(h_rank)
        console.log(lowest)
    // var data = [
    //     {
    //         x: Region,
    //         y: score,
    //         type: 'bar'
    //     }
    //     ];

// var i, r;

// var x = [];
// var y = [];
// var z = [];
// var c = [];

// for(i = 0; i < pointCount; i++)
//  {
//      r = i * (pointCount - i);
//      x.push(r * Math.cos(i / 30));
//      y.push(r * Math.sin(i / 30));
//      z.push(i);
//      c.push(i)
//  }

//  console.log("hoi")

// Plotly.newPlot('myDiv', [{
//      type: 'scatter3d',
//      mode: 'lines',
//      x: x,
//      y: y,
//      z: z,
//      opacity: 0.7,
//      line: {
//        width: 10,
//        color: c,
//        colorscale: 'Viridis'}
//     }]);
//         Plotly.newPlot('myDiv', data);
});