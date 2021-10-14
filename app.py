# From web scraping activities day 3, #8
from flask import Flask, render_template
import pymongo

app = Flask(__name__)

# setup mongo connection
conn = "mongodb://localhost:27017"
client = pymongo.MongoClient(conn)

# connect to mongo db and collection
db = client.happy_db
happy = db.happy

# ss_db = db.suicide


@app.route("/")
def index():
    # write a statement that finds all the items in the db and sets it to a variable
    happy_list = list(happy.find())
    print(happy_list)

    # render an index.html template and pass it the data you retrieved from the database
    return render_template("index.html", happy_list=happy_list)


if __name__ == "__main__":
    app.run(debug=True)
