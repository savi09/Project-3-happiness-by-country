d3.json("/data").then(function (myData) {
  console.log("Year");
  console.log(myData);
  // var five_results = myData.map(happiness => happiness.year);
  // var happy_score = myData.happiness.map(x => x.happiness_score);
  // var happy_country = myData.happiness.map(x => x.Country);
  var five_results = myData.happiness; //.filter(x => x.year == '2015');

  var score = [];
  var Region = [];
  var life_exp = [];
  // var y2 = [];
  for (var i = 0; i < five_results.length; i++) {
    var h_score = five_results[i].happiness_score;
    var rank = five_results[i].happiness_rank;
    var h_Region = five_results[i].Region;
    var l_expec = five_results[i].life_expectancy;

    score.push(h_score);
    Region.push(h_Region);
    life_exp.push(l_expec*100)
  }
  // console.log(score + " " + rank + " " + Region + " " + l_expec)
  // console.log(score)

  //var life_happy = [score, life_exp]

  var t1 = [
    {
      x: Region,
      y: life_exp,
      type: "bar",
      text: score.map(String),
      textposition: 'auto',
      
      marker: {
        color: "rgb(158,202,225)",
        line: {
          color: "rgb(8,48,107)",
          width: 1.5,
        },
      },
      transforms: [
        {
          type: "aggregate",
          groups: Region,
          aggregations: [{ target: "y", func: "avg", enabled: true }
          ],
        },
      ],
    },
  ];

  // var t2 = [
  //   {
  //     x: Region,
  //     y: life_exp,
  //     type: "bar",
  //     name: "y2 life",
  //     text: life_exp.map(String),
  //     textposition: 'auto',
  //     //hoverinfo: 'none',
  //     marker: {
  //       color: "rgb(158,202,225,.5)",
  //       line: {
  //         color: "rgb(8,48,107)",
  //         width: 1.5,
  //       },
  //     },
  //     transforms: [
  //       {
  //         type: "aggregate",
  //         groups: Region,
  //         aggregations: [{ target: "life_exp", func: "avg", enabled: true }],
  //       },
  //     ],
  //   },
  // ];

  var data = [t1];

  barlayout = {
    title: "<b>Plotly Aggregations</b><br>use dropdown to change aggregation",
    xaxis: { title: "Region" },
    yaxis: { title: "life_exp"},
    yaxis2: {
        title: 'yaxis2 title',
        titlefont: {color: 'rgb(148, 103, 189)'},
        tickfont: {color: 'rgb(148, 103, 189)'},
        overlaying: 'y',
        side: 'right'
      },
    height: 600,
    width: 900,
    updatemenus: [
      {
        x: 0.85,
        y: 1.15,
        xref: "paper",
        yref: "paper",
        yanchor: "top",
        active: 0,
        showactive: false,
        buttons: [
          {
            method: "restyle",
            args: ["transforms[0].aggregations[0].func", "avg"],
                  
            label: "Avg",
          },
        //   {
        //     method: "restyle",
        //     args: ["transforms[0].aggregations[0].func", "sum"],
        //     label: "Sum",
        //   },
          {
            method: "restyle",
            args: ["transforms[0].aggregations[0].func", "min"],
            label: "Min",
          },
          {
            method: "restyle",
            args: ["transforms[0].aggregations[0].func", "max"],
            label: "Max",
          },
          {
            method: "restyle",
            args: ["transforms[0].aggregations[0].func", "mode"],
            label: "Mode",
          },
          {
            method: "restyle",
            args: ["transforms[0].aggregations[0].func", "median"],
            label: "Median",
          },
          {
            method: "restyle",
            args: ["transforms[0].aggregations[0].func", "count"],
            label: "Count",
          },
          {
            method: "restyle",
            args: ["transforms[0].aggregations[0].func", "stddev"],
            label: "Std.Dev",
          },
        //   {
        //     method: "restyle",
        //     args: ["transforms[0].aggregations[0].func", "first"],
        //     label: "First",
        //   },
        //   {
        //     method: "restyle",
        //     args: ["transforms[0].aggregations[0].func", "last"],
        //     label: "Last",
        //   },
        ],
      },
    ],
  };


//   layout = {
//     title: "<b>Plotly Aggregations</b><br>use dropdown to change aggregation",
//     xaxis: { title: "Region" },
//     yaxis: { title: "Happiness_Score", range: [0, 22] },
//     height: 600,
//     width: 900,
//     updatemenus: [
//       {
//         x: 0.85,
//         y: 1.15,
//         xref: "paper",
//         yref: "paper",
//         yanchor: "top",
//         active: 0,
//         showactive: false,
//         buttons: [
//           {
//             method: "restyle",
//             args: ["transforms[0].aggregations[0].func", "avg"],
//             label: "Avg",
//           },
//           {
//             method: "restyle",
//             args: ["transforms[0].aggregations[0].func", "sum"],
//             label: "Sum",
//           },
//           {
//             method: "restyle",
//             args: ["transforms[0].aggregations[0].func", "min"],
//             label: "Min",
//           },
//           {
//             method: "restyle",
//             args: ["transforms[0].aggregations[0].func", "max"],
//             label: "Max",
//           },
//           {
//             method: "restyle",
//             args: ["transforms[0].aggregations[0].func", "mode"],
//             label: "Mode",
//           },
//           {
//             method: "restyle",
//             args: ["transforms[0].aggregations[0].func", "median"],
//             label: "Median",
//           },
//           {
//             method: "restyle",
//             args: ["transforms[0].aggregations[0].func", "count"],
//             label: "Count",
//           },
//           {
//             method: "restyle",
//             args: ["transforms[0].aggregations[0].func", "stddev"],
//             label: "Std.Dev",
//           },
//           {
//             method: "restyle",
//             args: ["transforms[0].aggregations[0].func", "first"],
//             label: "First",
//           },
//           {
//             method: "restyle",
//             args: ["transforms[0].aggregations[0].func", "last"],
//             label: "Last",
//           },
//         ],
//       },
//     ],
//   };

  // var data = [t1,t2];
  //Plotly.newPlot('myDiv', data, layout)
  Plotly.newPlot("myagg", data, barlayout);
});
