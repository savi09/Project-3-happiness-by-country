//////// Title Animation //////////////
// Wrap every letter in a span
var textWrapper = document.querySelector('.ml2');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml2 .letter',
    scale: [4,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 950,
    delay: (el, i) => 70*i
  }).add({
    targets: '.ml2',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });

  //////// END - Title Animation //////////////


///////////// Bubble Chart //////////////

function drawType(yr_choice) {
    d3.json('/data').then(function (myData) {

        var ss_filtered = myData.suicide.filter(x => x.year == yr_choice);

        var suicide = [];
        
        var tmp_sNo = 0;
        var tmp_pop = 0;
        var sPer = 0;
        for (var i = 0; i < ss_filtered.length; i++) {
            
            if (i == (ss_filtered.length-1)) {
                tmp_sNo = tmp_sNo + ss_filtered[i].suicides_no;
                tmp_pop = tmp_pop + ss_filtered[i].population;
                sPer = (tmp_sNo / tmp_pop)* 100000;
                suicide.push({"country": ss_filtered[i].country,
                    "year": ss_filtered[i].year,
                    "suicideNo": tmp_sNo,
                    "population": tmp_pop,
                    "perOne": sPer})
                tmp_sNo = 0;
                tmp_pop = 0;}
            else if (ss_filtered[i].country==ss_filtered[i+1].country && ss_filtered[i].year==ss_filtered[i+1].year) {
                tmp_sNo = tmp_sNo + ss_filtered[i].suicides_no;
                tmp_pop = tmp_pop + ss_filtered[i].population;
            } else {
                tmp_sNo = tmp_sNo + ss_filtered[i].suicides_no;
                tmp_pop = tmp_pop + ss_filtered[i].population;
                sPer = (tmp_sNo / tmp_pop) * 100000;
                suicide.push({"country": ss_filtered[i].country,
                    "year": ss_filtered[i].year,
                    "suicideNo": tmp_sNo,
                    "population": tmp_pop,
                    "perOne": sPer})
                tmp_sNo = 0;
                tmp_pop = 0;
            }

        }


        // console.log("suicide", suicide)

        var happy_filtered = myData.happiness.filter(x => x.year == yr_choice);

        var scatterData = [];
        
    
        for (var z = 0; z < suicide.length; z++) {
            for (var t = 0; t < happy_filtered.length; t++) {
                // console.log(suicide[z].country, suicide[z].year)
                // console.log(happy_filtered[t].Country, happy_filtered[t].year)
                if (suicide[z].country==happy_filtered[t].Country && suicide[z].year==happy_filtered[t].year) {
                    scatterData.push({"country": suicide[z].country,
                        "year": suicide[z].year,
                        "suicideNo": suicide[z].suicideNo,
                        "population": suicide[z].population,
                        "perOne": suicide[z].perOne,
                        "happiness_score": happy_filtered[t].happiness_score})
                } 
            }

        }

        // console.log("scatterData", scatterData)

        ////////// Bubble Chart //////////
        
        var ctry_ = [];
        var ss = [];
        var happy_ = [];
        var happy_Color = [];
        var ssSize = [];

        for (var key1 in scatterData) {
            ctry_.push(scatterData[key1].country);
            ss.push(scatterData[key1].perOne );
            happy_.push(scatterData[key1].happiness_score);
            happy_Color.push((scatterData[key1].happiness_score * 3));
            ssSize.push((scatterData[key1].perOne * 2));
            };

            // console.log(ctry_)
            // console.log(ss)
            // console.log(happy_)

        var traceBubble = {
            x: happy_,
            y: ss,
            text: ctry_,
            mode: 'markers',
            marker: {
                color: happy_,
                colorscale: 'Bluered',
            size: ssSize 
            }
        };
        
        var traceDataBub = [traceBubble];
        
        var layout ={
            xaxis: {
                title: 'Happiness Score'},
            yaxis: {
                title: 'Suicides per 100K'}
        };
        
        Plotly.newPlot('bubble', traceDataBub, layout);


        


    });
};

///////////// END - Bubble Chart //////////////


///////////// Map Chart //////////////
rows = [];

const tbody = d3.select("tbody");

function optionChanged(selOption) {
    console.log("selOption")
    console.log(selOption)

    tbody.html("");

    d3.json('/data', function (myData) {
        console.log("Year")
        console.log(myData)

        if (selOption == "happy2015") {
            // console.log("selOption")
            // console.log(myData.happiness.length)

//             var five_results = myData.happiness.filter(x => x.year == '2015');

            for (var i = 0; i < myData.happiness.length; i++) {
                if (myData.happiness[i].year == '2015') {
                    // console.log("country")
                    // console.log(myData.happiness[i].Country)
                    
                    var country = myData.happiness[i].Country;
                    var code = myData.happiness[i].code;
                    var rank = myData.happiness[i].happiness_rank;
                    var score = myData.happiness[i].happiness_score;

                    rows.push({
                        "country": country,
                        "code": code,
                        "rank": rank,
                        "score": score
                    });
                }

//                 // console.log("data for each country")
//                 // console.log(score + " " + rank + " " + country)
            };

            console.log("rows check")
            console.log(rows)

            function unpack(rows, key) {
                return rows.map(function (row) { return row[key]; });
            }

            var data = [{
                type: 'choropleth',
                locations: unpack(rows, 'code'),
                z: unpack(rows, 'score'),
                text: unpack(rows, 'country'),
                colorscale: [
                    [0, 'rgb(5, 10, 172)'], [0.35, 'rgb(40, 60, 190)'],
                    [0.5, 'rgb(70, 100, 245)'], [0.6, 'rgb(90, 120, 245)'],
                    [0.7, 'rgb(106, 137, 247)'], [1, 'rgb(220, 220, 220)']],
                autocolorscale: false,
                reversescale: true,
                marker: {
                    line: {
                        color: 'rgb(180,180,180)',
                        width: 0.5
                    }
                },
                tick0: 0,
                zmin: 0,
                dtick: 1000,
                colorbar: {
                    autotic: false,
                    tickprefix: '',
                    title: 'Happiness<br>Score'
                },
                // autocolorscale: true
            }];

            var layout = {
                title: '2015 World Happiness Map<br><a href="https://www.cia.gov/library/publications/the-world-factbook/fields/2195.html">Team 1 </a>',
                geo: {
                    showframe: false,
                    showcoastlines: false,
                    projection: {
                        type: 'mercator'
                        // type: 'robinson'
                    }
                },
                width: 870,
                height: 1000
            };
            Plotly.newPlot("myDiv", data, layout, { showLink: false });

 
            rows.forEach((row_data) => {
                // Create tr for each row of the table
                const row = tbody.append("tr");

                console.log("row_data")
                console.log(row_data)

                // Create multiple td cells for each row
                Object.values(row_data).forEach((value) => {
                    if (value != '2015') {
                        let cell = row.append("td");
                        cell.text(value);
                    }
                });
            });
        }

if (selOption == "happy2016") {
    // console.log("selOption")
    // console.log(myData.happiness.length)

//             var five_results = myData.happiness.filter(x => x.year == '2015');

    for (var i = 0; i < myData.happiness.length; i++) {
        if (myData.happiness[i].year == '2016') {
            // console.log("country")
            // console.log(myData.happiness[i].Country)
            
            var country = myData.happiness[i].Country;
            var code = myData.happiness[i].code;
            var rank = myData.happiness[i].happiness_rank;
            var score = myData.happiness[i].happiness_score;

            rows.push({
                "country": country,
                "code": code,
                "rank": rank,
                "score": score
            });
        }

//                 // console.log("data for each country")
//                 // console.log(score + " " + rank + " " + country)
    };

    console.log("rows check")
    console.log(rows)

    function unpack(rows, key) {
        return rows.map(function (row) { return row[key]; });
    }

    var data = [{
        type: 'choropleth',
        locations: unpack(rows, 'code'),
        z: unpack(rows, 'score'),
        text: unpack(rows, 'country'),
        colorscale: [
            [0, 'rgb(5, 10, 172)'], [0.35, 'rgb(40, 60, 190)'],
            [0.5, 'rgb(70, 100, 245)'], [0.6, 'rgb(90, 120, 245)'],
            [0.7, 'rgb(106, 137, 247)'], [1, 'rgb(220, 220, 220)']],
        autocolorscale: false,
        reversescale: true,
        marker: {
            line: {
                color: 'rgb(180,180,180)',
                width: 0.5
            }
        },
        tick0: 0,
        zmin: 0,
        dtick: 1000,
        colorbar: {
            autotic: false,
            tickprefix: '',
            title: 'Happiness<br>Score'
        },
        // autocolorscale: true
    }];

    var layout = {
        title: '2016 World Happiness Map<br><a href="https://www.cia.gov/library/publications/the-world-factbook/fields/2195.html">Team 1 </a>',
        geo: {
            showframe: false,
            showcoastlines: false,
            projection: {
                type: 'mercator'
                // type: 'robinson'
            }
        },
        width: 870,
        height: 1000
    };
    Plotly.newPlot("myDiv", data, layout, { showLink: false });


    rows.forEach((row_data) => {
        // Create tr for each row of the table
        const row = tbody.append("tr");

        console.log("row_data")
        console.log(row_data)

        // Create multiple td cells for each row
        Object.values(row_data).forEach((value) => {
            if (value != '2016') {
                let cell = row.append("td");
                cell.text(value);
            }
        });
    });
}
})
}
///////////// END - Map Chart //////////////



/////// Initial Chart State //////////////////////

function initCharts() {
    d3.json('/data').then(function (myData) {

        ///// Initial Bubble Chart ////////
        var ss_filtered = myData.suicide.filter(x => x.year == '2015');

        var suicide = [];
        
        var tmp_sNo = 0;
        var tmp_pop = 0;
        var sPer = 0;
        for (var i = 0; i < ss_filtered.length; i++) {
            
            if (i == (ss_filtered.length-1)) {
                tmp_sNo = tmp_sNo + ss_filtered[i].suicides_no;
                tmp_pop = tmp_pop + ss_filtered[i].population;
                sPer = (tmp_sNo / tmp_pop)* 100000;
                suicide.push({"country": ss_filtered[i].country,
                    "year": ss_filtered[i].year,
                    "suicideNo": tmp_sNo,
                    "population": tmp_pop,
                    "perOne": sPer})
                tmp_sNo = 0;
                tmp_pop = 0;}
            else if (ss_filtered[i].country==ss_filtered[i+1].country && ss_filtered[i].year==ss_filtered[i+1].year) {
                tmp_sNo = tmp_sNo + ss_filtered[i].suicides_no;
                tmp_pop = tmp_pop + ss_filtered[i].population;
            } else {
                tmp_sNo = tmp_sNo + ss_filtered[i].suicides_no;
                tmp_pop = tmp_pop + ss_filtered[i].population;
                sPer = (tmp_sNo / tmp_pop) * 100000;
                suicide.push({"country": ss_filtered[i].country,
                    "year": ss_filtered[i].year,
                    "suicideNo": tmp_sNo,
                    "population": tmp_pop,
                    "perOne": sPer})
                tmp_sNo = 0;
                tmp_pop = 0;
            }

        }


        // console.log("suicide", suicide)

        var happy_filtered = myData.happiness.filter(x => x.year == '2015');

        var scatterData = [];
        
        var tmp_sNo = 0;
        var tmp_pop = 0;
        var sPer = 0;
        for (var z = 0; z < suicide.length; z++) {
            for (var t = 0; t < happy_filtered.length; t++) {
                // console.log(suicide[z].country, suicide[z].year)
                // console.log(happy_filtered[t].Country, happy_filtered[t].year)
                if (suicide[z].country==happy_filtered[t].Country && suicide[z].year==happy_filtered[t].year) {
                    scatterData.push({"country": suicide[z].country,
                        "year": suicide[z].year,
                        "suicideNo": suicide[z].suicideNo,
                        "population": suicide[z].population,
                        "perOne": suicide[z].perOne,
                        "happiness_score": happy_filtered[t].happiness_score})
                } 
            }

        }

        // console.log("scatterData", scatterData)

        ////////// Bubble Chart //////////
        
        var ctry_ = [];
        var ss = [];
        var happy_ = [];
        var ssSize = [];

        for (var key1 in scatterData) {
            ctry_.push(scatterData[key1].country);
            ss.push(scatterData[key1].perOne );
            happy_.push(scatterData[key1].happiness_score);
            ssSize.push((scatterData[key1].perOne * 2));
            };

            // console.log(ctry_)
            // console.log(ss)
            // console.log(happy_)

         var traceBubble = {
            x: happy_,
            y: ss,
            text: ctry_,
            mode: 'markers',
            marker: {
                color: happy_,
                colorscale: 'Bluered',
            size: ssSize 
            }
        };
        
        var traceDataBub = [traceBubble];
        
        var layout ={
            xaxis: {
                title: 'Happiness Score'},
            yaxis: {
                title: 'Suicides per 100K'}
        };
        
        Plotly.newPlot('bubble', traceDataBub, layout);

        ///// END - Initial Bubble Chart ////////

        ///// Initial Map Chart ////////

        for (var i = 0; i < myData.happiness.length; i++) {
            if (myData.happiness[i].year == '2015') {
                // console.log("country")
                // console.log(myData.happiness[i].Country)
                
                var country = myData.happiness[i].Country;
                var code = myData.happiness[i].code;
                var rank = myData.happiness[i].happiness_rank;
                var score = myData.happiness[i].happiness_score;

                rows.push({
                    "country": country,
                    "code": code,
                    "rank": rank,
                    "score": score
                });
            }

//                 // console.log("data for each country")
//                 // console.log(score + " " + rank + " " + country)
        };

        console.log("rows check")
        console.log(rows)

        function unpack(rows, key) {
            return rows.map(function (row) { return row[key]; });
        }

        var data = [{
            type: 'choropleth',
            locations: unpack(rows, 'code'),
            z: unpack(rows, 'score'),
            text: unpack(rows, 'country'),
            colorscale: [
                [0, 'rgb(5, 10, 172)'], [0.35, 'rgb(40, 60, 190)'],
                [0.5, 'rgb(70, 100, 245)'], [0.6, 'rgb(90, 120, 245)'],
                [0.7, 'rgb(106, 137, 247)'], [1, 'rgb(220, 220, 220)']],
            autocolorscale: false,
            reversescale: true,
            marker: {
                line: {
                    color: 'rgb(180,180,180)',
                    width: 0.5
                }
            },
            tick0: 0,
            zmin: 0,
            dtick: 1000,
            colorbar: {
                autotic: false,
                tickprefix: '',
                title: 'Happiness<br>Score'
            },
            // autocolorscale: true
        }];

        var layout = {
            title: '2015 World Happiness Map<br><a href="https://www.cia.gov/library/publications/the-world-factbook/fields/2195.html">Team 1 </a>',
            geo: {
                showframe: false,
                showcoastlines: false,
                projection: {
                    type: 'mercator'
                    // type: 'robinson'
                }
            },
            width: 870,
            height: 1000
        };
        Plotly.newPlot("myDiv", data, layout, { showLink: false });


        rows.forEach((row_data) => {
            // Create tr for each row of the table
            const row = tbody.append("tr");

            console.log("row_data")
            console.log(row_data)

            // Create multiple td cells for each row
            Object.values(row_data).forEach((value) => {
                if (value != '2015') {
                    let cell = row.append("td");
                    cell.text(value);
                }
            });
        });

        ///// END - Initial Map Chart ////////


        


    });
}

/////// END - Initial Chart State Function//////////////////////




initCharts();