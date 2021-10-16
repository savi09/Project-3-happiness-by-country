# From web scraping activities day 3, #8
from flask import Flask, render_template, jsonify
from flask_pymongo import PyMongo

app = Flask(__name__)

mongo = PyMongo(app, uri="mongodb://localhost:27017/happy_db")

# setup mongo connection
# conn = "mongodb://localhost:27017"
# client = pymongo.MongoClient(conn)
 
# connect to mongo db and collection
# db = client.happy_db
# happy = mongo.db.happy
# ss_db = mongo.db.suicide


@app.route('/data/<year>')
def data_find(year):
    # write a statement that finds all the items in the db and sets it to a variable
    happy_list = mongo.db.happy.find({'year': year}, {'_id': False})
    suicide_list = mongo.db.suicide.find({'year': year}, {'_id': False})
    print(happy_list)

    data = {'happiness': happy_list, 'suicide': suicide_list}
    parsed = [x for x in data]
    print('parsed: ', parsed)
    return jsonify(parsed)
    
    # render an index.html template and pass it the data you retrieved from the database
    return render_template('index.html', data = data)


if __name__ == "__main__":
    app.run(debug=True)
