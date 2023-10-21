import os
import google.auth

import google.cloud.aiplatform as vertex_ai

# import palm_api



# Set the GOOGLE_APPLICATION_CREDENTIALS environment variable to the path of your service account key file.
os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = "creds.json"

# Create a Vertex AI PaLM API endpoint.
endpoint = vertex_ai.PaLMEndpoint.create(
    project="my-project",
    location="us-central1",
    model="paLM-540B"
)

# Generate a text response from a prompt.
response = endpoint.generate_text(
    prompt="Write a poem about a cat",
    temperature=0.5,
    n=1
)

# Print the generated text completion.
print(response.completions[0].text)


