const connectionAPiService = require('../services/connectionAPiService');
const connectService = new connectionAPiService(process.env.BARD_API_KEY);

// post /connect-to-other-api
const getConnection = async (req, res) => {
  try {

    const { url, message } = req.body;

    const requestData = {
      url,
      message,
    };

    const generatedDocumentation = await connectService.generateDocumentation(requestData);

    res.json({ documentation: generatedDocumentation });
  } catch (error) {
    console.error('Error connecting to the other API:', error.message);
    res
      .status(500)
      .json({ error: 'An error occurred while connecting to the other API.' });
  }
};

module.exports = {
  getConnection,
};
