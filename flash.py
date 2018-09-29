from flask import Flask #//Framwork that gives us function to help build app

from hello import nasa_image #//File name which we imported the api, and the functoon that we want to make

app = Flask(__name__) #//Make a app using flash /*Not sure what __name is*/
@app.route('/',methods=['GET'])
def display(): #//Function to displat nasa_image
    picture = nasa_image()
    format_pict = '<h1>Nasa Image of the Day</h1> <img src="{}" alt="" style="width:400px; height:400px;">'.format(
        picture)
    return format_pict


if __name__ == '__main__':
    app.run(host='0.0.0.0', port = 3000) #this is to run app on our local host using port 30000