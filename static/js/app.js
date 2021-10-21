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