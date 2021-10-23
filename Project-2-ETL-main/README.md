# Project-2-ETL

In this project a web application is built that scrapes various websites for data related to the Mission to Mars and displays the information in a single HTML page. 

## Data Selection - Extract
I pulled CSV data files from Kaggle, A Happiness rating by country for 2015 (called 2015.csv), another for 2016 (called 2016.csv), as well as a Suicide Rates from 1985 until 2016 (called master.csv).  I used Pandas to Extract the data for cleaning. 

## Data Cleaning - Transform
Happiness Ratings for 2015 and 2016:
- These files did not have columns with the year so that was added. 
- Next, I used concat to stack the two dataframes. 
-Then, I renamed the columns for ease of use in the DataBase. 

Suicide Ratings:
- This file needed columns renamed as well. 
- I ran some functions to clean up and reduce the data but later decided to keep the data and let the DataBase queries handle any sorts and filters and calculations that might be desired. 

## DataBase Loading- Load
Once the data was cleaned up I used pandas to turn the dataframe into a dictionary and pymongo to load the data into a "happy_db" MongoDB DataBase with collection names of "happy" and "suicide."  MongoDB was used since the data was not as structured as I would need for a SequelAlchemy DataBase.    

## Author

  - Jennifer Rocha

## License

This project is licensed under the [CC0 1.0 Universal](LICENSE.md)
Creative Commons License - see the [LICENSE.md](LICENSE.md) file for
details
