import zod from "zod";
import axios from "axios";

const attributeValuditer = zod.object({
  temperature: zod.string(),
  oxygen: zod.string(),
  humidity: zod.string(),
});

async function model_api(req, res) {
  const { temperature, oxygen, humidity } = req.query;

  if (!temperature || !oxygen || !humidity) {
    return res.status(403).json({
      messsge: "give all the attributs",
    });
  }

  const { success } = attributeValuditer.safeParse({
    temperature,
    oxygen,
    humidity,
  });

  if (!success) {
    return res.status(403).json({
      messsge: "place give correct data type",
    });
  }

  try {
    const resp = await axios.get(process.env.ML_MODEL_API, {
      params: {
        temperature,
        oxygen,
        humidity,
      },
    });

    const data = await resp.data;

    return res.status(200).json({
      data,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error,
    });
  }
}

export { model_api };
