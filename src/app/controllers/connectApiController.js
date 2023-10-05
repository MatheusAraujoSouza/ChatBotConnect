const connectionAPiService = require("../services/connectionAPiService");
const connectService = new connectionAPiService(process.env.BARD_API_KEY);

// get /simple-communication
const simpleCommmunication = async (req, res) => {
  try {
    const { message } = req.body;
    const requestData = {
      message,
    };
    const generatedDocumentation = await connectService.generateSimpleReponse(
      requestData
    );

    res.json({ response: generatedDocumentation });
  } catch (error) {
    console.error("Error connecting to the other API:", error.message);
    res
      .status(500)
      .json({ error: "An error occurred while connecting to the other API." });
  }
};

module.exports = {
  simpleCommmunication,
};
