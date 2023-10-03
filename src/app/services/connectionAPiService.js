
const axios = require('axios');
process.env.BARD_API_KEY = '??';
const { BardAPI } = require('bard-api-node');
const assistant = new BardAPI();
const generateDocumentation = async (url) => {
  try {
    await MakeAssistant();
    const response = await axios.get(url); 
    
    const documentationRequest = `Generate API documentation for the other API:\n\n${JSON.stringify(
      response.data,
      null,
      2
    )}`;

    const generatedDocumentation = await assistant.getBardResponse(documentationRequest);

    return JSON.parse(generatedDocumentation);

  } catch (error) {
    console.error('Error generating documentation:', error.message);
    throw error;
  }
};

async function MakeAssistant(){
  try{
    await assistant.setSession('__Secure-1PSID', process.env.BARD_API_KEY);
  }catch(error){
    console.error('Error generating session:', error.message);
    throw error;
  }
}

module.exports = {
  generateDocumentation,
};
