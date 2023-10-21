import openai
from dotenv import load_dotenv
load_dotenv()
import os

openai.api_key = os.getenv("TOKEN")


def get_response(prompt, engine="davinci", max_tokens=150):
    response = openai.Completion.create(
        engine=engine,
        prompt=prompt,
        max_tokens=max_tokens,
        temperature=0.9,
        top_p=1,
        frequency_penalty=0,
        presence_penalty=0.6,
        stop=["\n", " Human:", " AI:"]
    )
    return response["choices"][0]






