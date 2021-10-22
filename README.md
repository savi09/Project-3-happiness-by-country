# Project-3-happiness-by-country



to do: 
Make all maps function off one button
maps responsive to size


Flask App feeding html the mongo db (Web Scraping Day 3 and the MARS app)  Index.html has to be in a templates folder for the app.py file to work. 
HTML- page (web visualization challenge belly button)
CSS- styling (web visualization challenge belly button
JavaScript- visuals based on drop down by year: plotly with legend and table
JS Library with moving letters to animate headers:
https://tobiasahlin.com/moving-letters/

Visualizations:
Bar Chart or scatter for Suicide compared to Happiness to see if they are correlated (Maybe)
Button operating a happiness rank with 10 at a time.
Gauge:
Maps to be in a dark mode

Wishlist:
if we have time(Comparison between countries per apple page):
Button			Button
Visual			Visual

Potentially a slide bar:
https://gis.cdc.gov/grasp/fluview/fluportaldashboard.html
https://plotly.com/python/v3/gapminder-example/

dark theme:
var dark = L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        subdomains: 'abcd',
        maxZoom: 19



# Project 3- Happiness by Country

## Prject Summary   
Extract, transform, and load happiness and suicide data to a database.  Use Flask to utilize that database to create a dashboard visualizing certain datapoints.  We were curious to see:  
- What country ranks the highest for the happiest people?
- Are there any large variations between the years?
- Can you see any correlation between suicide rates and countries happiness score?
- Is there a connection between a country's happiness score and their life expectancy rates?

## About the data
* Data Extracted from Kaggle for ETL project: 
- 2015.csv ”Happiness by Country for 2015” (https://www.kaggle.com/mathurinache/world-happiness-report)
- 2016.csv “Happiness by Country for 2016” (https://www.kaggle.com/mathurinache/world-happiness-report)
- master.csv “Suicide Rates by year and country from 1985 to 2016” (https://www.kaggle.com/russellyates88/suicide-rates-overview-1985-to-2016)

* Data Transformed:
- Happiness Ratings for 2015 and 2016:
- These files did not have columns with the year so that was added.
- Concat was used to stack the two dataframes. 
- Renamed some columns for ease of use in the database.
- Added country code for use with visualizations

- Suicide Ratings:
- Renamed some columns for ease of use in the database.

* Database Loading:
- Once the data was cleaned up I used pandas to turn the dataframe into a dictionary and pymongo to load the data into a "happy_db" MongoDB DataBase with collection names of "happy" and "suicide." 
- MongoDB was used since the data was not as structured as I would need for a SequelAlchemy DataBase.

#### Presenters
* Shailza Rattu
* Susana Villagrana
* Jennifer Rocha

### Presentation
To view the presentation, click below (This will require you to download the file, but it will have audio):

   ![Project 3- Happiness by Country]( "Project 3- Happiness by Country")
   
 To view a .pdf version of the slides, click below:
 
   ![Project 3- Happiness by Country.pdf](https://github.com/.pdf)

##  Overview
 Next we looked 
  
 ###### Figure: 
![Top skills needed for Data Analyst, Engineer, and Scientist positions](https://github.com/jennifermarie6sl/Project-1/blob/ed5a47a655b497b329e1e2adb06faf46f621032b/Presentation_Charts/Top_Skills.png)

## Insights 1
Next, we looked at differences in positions by location. First, we wanted to know which states had higher paying positions (Figure 4). We found that higher salaries are offered in areas with established or emerging technology centers, like Utah (Silicon Slopes) and South Carolina (Silicon Harbor) Then, we looked wanted to know if these changes in salary were caused 

###### Figure: 
![alt text](https://github.com/jennifermarie6sl/Project-1/blob/ed5a47a655b497b329e1e2adb06faf46f621032b/Presentation_Charts/Higher_paying_jobs_heatmap.png)

## Insights 2
Next we looked at employer data. We wanted to know how happy employees were with these companies that had job opennings. We initiated this section by looking at the distribution of company ratings by the type of job they had opened (Figure 7). For 

###### Figure: 
![alt text](https://github.com/jennifermarie6sl/Project-1/blob/ed5a47a655b497b329e1e2adb06faf46f621032b/Presentation_Charts/Company_Rating_by_Job_Types.png)

## Insights 3
Next we looked 

###### Figure: 
![alt text](https://github.com/jennifermarie6sl/Project-1/blob/ed5a47a655b497b329e1e2adb06faf46f621032b/Presentation_Charts/Company_Rating_by_Job_Types.png)


# Sources
* Power point images: All images in out presentation came from the Powerpoint Design Tool or Online Pictures Tool. Except, the we created. 
* Git hub markdown cheatsheet: ![Markdown Cheatsheet](https://github.com/tchapi/markdown-cheatsheet/blob/master/README.md)
* Convert country name to country code for use in Plotly: https://pypi.org/project/pycountry/
* Colorscales for plotly: https://plotly.com/javascript/colorscales/
* Choropleth map: https://plotly.com/javascript/choropleth-maps/
* JavaScript Library with moving letters to animate headers: https://tobiasahlin.com/moving-letters/