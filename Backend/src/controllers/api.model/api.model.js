import zod from "zod";
import axios from "axios";
import Records from "../../models/Records.js";
import { sendWarningMails } from "../emails/emailSender.js";

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
    const resp = await axios.get(
      "https://firetrack-python-api.onrender.com/predict_forest",
      {
        params: {
          temperature,
          oxygen,
          humidity,
        },
      }
    );
    const data = await resp.data;

    const newRecord = await Records.create({
      userId: req.userId,
      temperature: temperature,
      oxygen: oxygen,
      humidity: humidity,
      probability: data.probability,
      danger: data.value,
    });

    if (!newRecord) {
      res.status(403).json({ message: "A New Record Not Created" });
    }

    if (data.value) {
      await sendWarningMails(req.userId);
    }

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
