
const axios = require('axios');
const bard = require('bard');

const generateDocumentation = async (url) => {
  try {

    const response = await axios.get(url); 
    
    const documentationRequest = `Generate API documentation for the other API:\n\n${JSON.stringify(
      response.data,
      null,
      2
    )}`;

    const { data: generatedDocumentation } = await bard.createCompletion({
      engine: 'text-davinci-002',
      prompt: documentationRequest,
      max_tokens: 200,
    });

    return generatedDocumentation;
  } catch (error) {
    console.error('Error generating documentation:', error.message);
    throw error;
  }
};

module.exports = {
  generateDocumentation,
};
