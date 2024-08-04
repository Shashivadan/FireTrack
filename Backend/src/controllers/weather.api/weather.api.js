import axios from "axios";
import Records from "../../models/Records.js";

export async function weatherApi(req, res) {
  try {
    const { lat, lon } = req.query;

    if (!lat || !lon)
      return res
        .status(403)
        .json({ message: " places provide some lat and lon" });
    const response = await axios.get(process.env.WEATHER_API_URL, {
      params: {
        lat,
        lon,
        units: "metric",
        appid: process.env.WEATHER_API_KEY,
      },
    });
    if (!response) {
      return res.status(403).json({
        message: "server is bazey",
      });
    }
    return res.status(202).json({ response: response.data });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal Server Error" + error });
  }
}

export async function automaticPrediction(req, res) {
  try {
    const { lat, lon } = req.query;

    if (!lat || !lon)
      return res.status(403).json({ message: "places provide lat and  lon" });

    const { data } = await axios.get(process.env.WEATHER_API_URL, {
      params: {
        lon,
        lat,
        units: "metric",
        appid: process.env.WEATHER_API_KEY,
      },
    });
    if (!data)
      return res.status(403).json({ message: "server is can't be reached" });
    const temp = data.main.temp;
    const humidity = data.main.humidity;
    const oxygen = 21;

    const response = await axios.get(process.env.ML_MODEL_API, {
      params: {
        temperature: Math.floor(temp),
        humidity,
        oxygen,
      },
    });
    if (!response.data)
      return res.status(403).json({ message: "model server is down" });
    const result = response.data;
    const newRecord = await Records.create({
      userId: req.userId,
      temperature: Math.floor(temp),
      humidity,
      oxygen,
      probability: result.probability,
      danger: result.value,
    });
    if (!newRecord) {
      return res.status(403).json({ message: "A New Record Is Not Created" });
    }

    return res.status(202).json({
      response: data,
      result,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal Server Error :" + error });
  }
}
