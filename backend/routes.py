import openai

import os
from flask import Flask, render_template, request, redirect, url_for, flash, session
import json 

#json credentials


with open('credentials.json') as f:
    data = json.load(f)

openai.api_key = data['TOKEN']









# Make a request to the OpenAI Completion API, specifying the `gpt-4` engine

# Get the generated text
def msgresponse(message):
    response = openai.ChatCompletion.create(
    model="gpt-4",
    messages=[{
        "role": "user",
        "content": message
    }],
    )
    msg = response["choices"][0]["message"]["content"]
    return {"msg":msg}


def coderesponse(message,lang):
    
    msg = f" explain the solution to the following problem in"
    
    response = openai.ChatCompletion.create(
    model="gpt-4",
    messages=[{
        "role": "user",
        "content": message
    }],
    )
    msg = response["choices"][0]["message"]["content"]
    return {"msg":msg}


app = Flask(__name__)

@app.route('/')
def index():
    return "Hello World"

#return it as a json object
@app.route('/chat/<message>', methods=['GET'])
def chat(message):
    return msgresponse(message)
'''

127.0.0.1:5000/chat/Hello

'''






if __name__ == '__main__':
    app.run(debug=True)







