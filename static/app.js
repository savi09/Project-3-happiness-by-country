// type plot
function drawType(fruit) {
    
    // ping type route
    d3.json(`/data/${2015}`).then(function (myData) {

        // map values
        let newX = myData.map(x => x.happiness_score);
        let newY = myData.map(x => x.cost);

        // restyle existing type plot
        Plotly.restyle('bar', 'x', [newX]);
        Plotly.restyle('bar', 'y', [newY]);

    });
};