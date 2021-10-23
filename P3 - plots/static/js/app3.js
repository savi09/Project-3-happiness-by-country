d3.json("/data").then(function (myData) {
    console.log("Year");
    console.log(myData);
    // var five_results = myData.map(happiness => happiness.year);
    // var happy_score = myData.happiness.map(x => x.happiness_score);
    // var happy_country = myData.happiness.map(x => x.Country);
    var five_results = myData.happiness; //.filter(x => x.year == '2015');

    var score = [];
    var Region = [];
    var life_e = [];
    var h_rank = [];
    //North America
    var score_na = [];
    var Le_na = [];
    // Australia and New Zealand
    var score_AusNZ =[]
    var Le_AusNZ = []
    // Central and Eastern Europe
    var score_CEE = []
    var Le_CEE = []
    // Eastern Asia
    var score_EA = []
    var Le_EA = []
    // Latin America and Caribbean
    var score_LAC = []
    var Le_LAC = []
    // Middle East and Northern Africa
    var score_MENA = []
    var Le_MENA = []
    // North America
    // Southeastern Asia
    var score_SEA = []
    var Le_SEA = []
    // Southern Asia
    var score_SA = []
    var Le_SA = []
    // Sub-Saharan Africa
    var score_SSA = []
    var Le_SSA = []
    // Western Europe
    var score_WE = []
    var Le_WE = []


    for (var i = 0; i < five_results.length; i++) {
        var h_score = five_results[i].happiness_score;
        var rank = five_results[i].happiness_rank;
        var h_Region = five_results[i].Region;
        var l_expec = (five_results[i].life_expectancy)*100;

        score.push(h_score);
        Region.push(h_Region);
        life_e.push(l_expec);
        h_rank.push(rank);
        if (h_Region == "North America") {
        console.log("North America");
        score_na.push(h_score);
        Le_na.push(l_expec);
        }
        else if (h_Region == "Australia and New Zealand") {
        score_AusNZ.push(h_score);
        Le_AusNZ.push(l_expec);
        }
        else if (h_Region == "Central and Eastern Europe") {
        score_CEE.push(h_score);
        Le_CEE.push(l_expec);
        }
        else if (h_Region == "Eastern Asia") {
        score_EA.push(h_score);
        Le_EA.push(l_expec);
        }
        else if (h_Region == "Latin America and Caribbean") {
        score_LAC.push(h_score);
        Le_LAC.push(l_expec);
        }
        else if (h_Region == "Middle East and Northern Africa") {
        score_MENA.push(h_score);
        Le_MENA.push(l_expec);
        }
        else if (h_Region == "Southeastern Asia") {
        score_SEA.push(h_score);
        Le_SEA.push(l_expec);
        }
        else if (h_Region == "Southern Asia") {
        score_SA.push(h_score);
        Le_SA.push(l_expec);
        }
        else if (h_Region == "Sub-Saharan Africa") {
        score_SSA.push(h_score);
        Le_SSA.push(l_expec);
        }
        else if (h_Region == "Western Europe") {
        score_WE.push(h_score);
        Le_WE.push(l_expec);
        }
    }
    console.log(score_na);
    console.log("test");

    var trace1 = {
        x: score_AusNZ,
        y: Le_AusNZ,
        mode: "marker",
        //autobinx: true,
        name: 'Australia and New Zealand', 
        marker: {
        color: "rgb(154, 194, 244)",
        size: 12,
        line: {
            color: "white",
            width: 0.5,
        },
        },
        type: "scatter",
    };

    var trace2 = {
        x: score_CEE,
        y: Le_CEE,
        mode: "line",
        name: 'Central and Eastern Europe',
        marker: {
        color: "rgb(255, 217, 102)",
        size: 12,
        },
        type: "line",
    };

    var trace3 = {
        x: score_na,
        y: Le_na,
        mode: "markers",
        name: "NA",
        marker: {
        color: "rgb(155, 207, 112)",
        size: 12,
        },
        type: "scatter",
    };

    var trace4 = {
        x: score_EA,
        y: Le_EA,
        mode: "marker",
        name: "Eastern Asia",
        marker: {
        color: "rgb(155, 277, 112)",
        size: 12,
        },
        type: "scatter",
    };
    var trace5 = {
        x: score_LAC,
        y: Le_LAC,
        mode: "marker",
        name: "Latin America and Caribbean",
        marker: {
        color: "rgb(155, 277, 150)",
        size: 12,
        },
        type: "scatter",
    };


    ///conditional to select Region

    // var trace3 = {
    // x: [42952, 37037, 33106, 17478, 9813, 5253, 4692, 3899],
    // y: [23, 42, 54, 89, 14, 99, 93, 70],
    // mode: 'markers',
    // name: 'Asia/Pacific',
    // text: ['Australia', 'Japan', 'South Korea', 'Malaysia', 'China', 'Indonesia', 'Philippines', 'India'],
    // marker: {
    // color: 'rgb(234, 153, 153)',
    // size: 12
    // },
    // type: 'scatter'
    // };

    // var trace4 = {
    // x: [19097, 18601, 15595, 13546, 12026, 7434, 5419],
    // y: [43, 47, 56, 80, 86, 93, 80],
    // mode: 'markers',
    // name: 'Latin America',
    // text: ['Chile', 'Argentina', 'Mexico', 'Venezuela', 'Venezuela', 'El Salvador', 'Bolivia'],
    // marker: {
    // color: 'rgb(142, 124, 195)',
    // size: 12
    // },
    // type: 'scatter'
    // };

    var data = [trace1] //trace2, trace3, trace4, trace5];

    var layout = {
        title: "Happiness vs Life Expectancy",
        xaxis: {
        title: "Happiness Score",
        showgrid: false,
        zeroline: false,
        },
        yaxis: {
        title: "Life Expectancy",
        showline: false,
        },
    };

    Plotly.newPlot("myDiv", data, layout);
    });
