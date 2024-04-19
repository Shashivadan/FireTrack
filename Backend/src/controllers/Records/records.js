import Records from "../../models/Records.js";

async function displayRecords(req, res) {
  try {
    const userId = req.userId;
    const records = await Records.find({ userId: userId });
    return res.status(200).json({
      records: records.map((record) => {
        return {
          _id: record._id,
          temperature: record.temperature,
          oxygen: record.oxygen,
          humidity: record.humidity,
          danger: record.danger,
          probability: record.probability,
          createdAt: record.createdAt,
        };
      }),
    });
  } catch (error) {
    console.log(error);
    return res.status(500);
  }
}

export default displayRecords;
