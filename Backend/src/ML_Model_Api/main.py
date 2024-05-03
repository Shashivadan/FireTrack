import pickle
import numpy
from fastapi import FastAPI, HTTPException
import uvicorn

app = FastAPI()


model = pickle.load(open('model.pkl', 'rb'))

@app.get("/predict_forest")
async def predict_forest(temperature: int, oxygen: int, humidity: int):

    features = [temperature, oxygen, humidity]
    val = [numpy.array(features)]
    
    # Perform prediction using the pre-trained model
    prediction = model.predict_proba(val)
    probability_of_fire = prediction[0][1]

    if probability_of_fire > 0.5 :
        status = "Forest is in Danger."
        Boolean = True
    else:
        status = "Forest is safe."
        Boolean = False
    
    result = {
        "status": status,
        "probability": round(probability_of_fire, 2),
        "value" : Boolean
    }
    return result

if __name__ == "__main__":
    uvicorn.run("main:app", host="127.0.0.1", port=6000, log_level="info")

# curl -X GET "http://127.0.0.1:8000/predict_forest?temperature=25&oxygen=18&humidity=60" -H "accept: application/json" 4
# end point for the model application:
