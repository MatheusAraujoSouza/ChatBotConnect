
const axios = require('axios');
import Bard from "bard-ai";
const bard = new Bard(YOUR_BARD_API_COOKIE);
const generateDocumentation = async (url) => {
  try {

    const response = await axios.get(url); 
    
    const documentationRequest = `Generate API documentation for the other API:\n\n${JSON.stringify(
      response.data,
      null,
      2
    )}`;

    const { data: generatedDocumentation } = await bard.ask(documentationRequest);

    return generatedDocumentation;
  } catch (error) {
    console.error('Error generating documentation:', error.message);
    throw error;
  }
};

module.exports = {
  generateDocumentation,
};
