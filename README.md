# Project 3- Happiness by Country

#### Presenters
* Shailza Rattu
* Susana Villagrana
* Jennifer Rocha

### Presentation
To view the presentation, click below (This will require you to download the file, but it will have audio):

   ![Project 3- Happiness by Country]( "Project 3- Happiness by Country")
   
 To view a .pdf version of the slides, click below:
 
   ![Project 3- Happiness by Country.pdf](https://github.com/.pdf)

## Project Description   
Extract, transform, and load happiness and suicide data to a database.  Use Flask to utilize that database to create a dashboard visualizing certain datapoints.  

We were curious to see: 
- What country ranks the highest for the happiest people?
- Are there any large variations between the years?
- Can you see any correlation between suicide rates and countries happiness score?
- Is there a connection between a country's happiness score and their life expectancy rates?

## About the data
* Data Extracted from Kaggle for ETL project: 
- [2015.csv "Happiness by Country for 2015"](https://www.kaggle.com/mathurinache/world-happiness-report)
- [2016.csv "Happiness by Country for 2016"](https://www.kaggle.com/mathurinache/world-happiness-report)
- [master.csv "Suicide Rates by year and country from 1985 to 2016"](https://www.kaggle.com/russellyates88/suicide-rates-overview-1985-to-2016)

## Step 1: ETL
### Extracting:​
- Extracted from Kaggle data sets.​
​
### Transform:​
- These files did not have columns with the year so that was added.​
- Concat was used to stack the two dataframes. ​
- Renamed some columns for ease of use in the database.​
- Added country code for use with visualizations​
​
### Loading:​
- Once the data was cleaned up pandas was used to turn the dataframe into a dictionary.  Pymongo helped to load the data into a "happy_db" MongoDB DataBase with collection names of "happy" and "suicide."​

##  Step 2: Flask
- Used to connect database from MongoDb to feed to our JavaScript for plotting.​
- Created route that included both collections within the database.​
- Returned the results jsonified for use in JS.​
- Removed nulls​

 ## Step 3: JavaScript
- Used to display the dashboard of interactive visuals.​
- Drop down menu operates all visuals.​
- Filters to sort data by year.​
- Plotly for plotting multiple traces to different table, bubble, bar, and map plots.​
- Anime.js to animate the header.​
- optionChanged, aggregation and unpack functions used on the data for plotting.​

 ## Step 4: HTML and CSS
- Used to display the dashboard of interactive visuals.​
- Drop down menu operates all visuals.​
- Bootstrap file added to style the page.​
- Anime script added for to animate the page header.​
- Scrolling function added to table.

## Tools and Languages​
- Jupyter Notebook​
- Flask​
- MongoDB​
- JavaScript​
- Plotly​
- HTML​
- CSS/Bootstrap​/Bootswatch
- Anime.js to animate the ​
- GitHub

## World Map of Happiness Score
Plotting the happiness score by rank on a map of countries, you can see minor differences when you toggle between the two years available from the drop down.  When you hover over each country you can see the country, happiness score as well as the country code.  This data is also what fills in the table that displays the countries in order by rank.  Again, there were only minor differences in the rank between the two years analyzed.    

###### Figure: World Map of Happiness Score 2015
![alt text](https://github.com/jennifermarie6sl/Project-1/blob/ed5a47a655b497b329e1e2adb06faf46f621032b/Presentation_Charts/Higher_paying_jobs_heatmap.png)

###### Figure: World Map of Happiness Score 2016
![alt text](https://github.com/jennifermarie6sl/Project-1/blob/ed5a47a655b497b329e1e2adb06faf46f621032b/Presentation_Charts/Higher_paying_jobs_heatmap.png)

## Happiness by Region Bar Chart
Based on the averages of happiness score by Region, Western Europe, North America, Australia and New Zealand have the highest happiness score.

###### Figure: Happiness by Region Bar Chart
![alt text](https://github.com/jennifermarie6sl/Project-1/blob/ed5a47a655b497b329e1e2adb06faf46f621032b/Presentation_Charts/Company_Rating_by_Job_Types.png)

## Life Expectancy by Region Bar Chart
Based on the averages of life expecctancy by Region, Western Europe, North America, Australia and New Zealand have the highest life expectancy.




###### Figure: Life Expectancy by Region Bar Chart
![alt text](https://github.com/jennifermarie6sl/Project-1/blob/ed5a47a655b497b329e1e2adb06faf46f621032b/Presentation_Charts/Company_Rating_by_Job_Types.png)

## Happiness Scores vs Suicide Rates by Country
Finally, we decided to compare happiness scores with suicide rates. We were hoping to find a correlation between these two datapoints. Unfortunately, we did not find such correlation. As you can see in the charts below, there are some countries who have one of the lowest happiness scores, but they also have one of the lowest suicide scores. Also, for example Lithuania has an average happiness score, but has the highest suicide rates. 

When comparing 2015 and 2016 in the dashboard, you can see that the countries stayed in the relatively same position of happiness score and suicide rates. Although the 2016 chart has much less data, by hovering over the bubble to find the country name, happiness score, and suicide rate then comparing to 2015 you can see they are very similar. This can, also, be seen easily by the size (coincides with suicide rates) and the color of the bubble(coincides with the happiness score).

###### Figure: Happiness Scores vs Suicide Rates by Country- 2015
![alt text](https://github.com/jennifermarie6sl/Project-1/blob/ed5a47a655b497b329e1e2adb06faf46f621032b/Presentation_Charts/Company_Rating_by_Job_Types.png)

###### Figure: Happiness Scores vs Suicide Rates by Country- 2016
![alt text](https://github.com/jennifermarie6sl/Project-1/blob/ed5a47a655b497b329e1e2adb06faf46f621032b/Presentation_Charts/Company_Rating_by_Job_Types.png)


# Sources
* Power point images: All images in out presentation came from the Powerpoint Design Tool or Online Pictures Tool. Except, the ones we created. 
* Git hub markdown cheatsheet: ![Markdown Cheatsheet](https://github.com/tchapi/markdown-cheatsheet/blob/master/README.md)
* Convert country name to country code for use in Plotly: [pypi.org](https://pypi.org/project/pycountry/)
* Colorscales for plotly: [Plotly Colorscales](https://plotly.com/javascript/colorscales/)
* Choropleth map: [Plotly Chloropleth](https://plotly.com/javascript/choropleth-maps/)
* JavaScript Library with moving letters to animate headers: [Animation](https://tobiasahlin.com/moving-letters/#2)
* Plotly: [Plotly](https://plotly.com/graphing-libraries/)
* D3: [D3](https://d3js.org/)
* Aggregation: [Plotly-Aggregations](https://plotly.com/javascript/aggregations/)
* Bar chart:  [Plotly-Bar Charts](https://plotly.com/javascript/bar-charts/)
* Bubble chart: [Plotly-Bubble Charts](https://plotly.com/javascript/bubble-charts/)
* Scatter plot: [Plotly-Scatter Charts](https://plotly.com/javascript/line-and-scatter/)
* Bootstrap: [Bootstrap Docs](https://getbootstrap.com/docs/5.1/getting-started/introduction/)
* Bootswatch: [Bootswatch-Minty](https://bootswatch.com/minty/)

 


### Original Wishlist:
- Gauge:
- Maps to be in a dark mode
if we have time(Comparison between countries per apple page):
- Button			Button
- Visual			Visual

- Potentially a slide bar:
- https://gis.cdc.gov/grasp/fluview/fluportaldashboard.html
- https://plotly.com/python/v3/gapminder-example/
- Dark theme:
- var dark = L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        subdomains: 'abcd',
        maxZoom: 1