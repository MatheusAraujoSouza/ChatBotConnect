const axios = require('axios');
const { BardAPI } = require('bard-api-node');

class ConnectionAPiService {

  constructor(apiKey) {
    this.assistant = new BardAPI();;
    this.apiKey = apiKey;
  }

  async initializeAssistant() {
    try {
      await this.assistant.setSession('__Secure-1PSID', this.apiKey);
    } catch (error) {
      console.error('Error generating session:', error.message);
      throw error;
    }
  }

  async generateDocumentation(requestData) {
    try {
      await this.initializeAssistant();
      // const response = await axios.get(requestData.url);

      // const documentationRequest = `${requestData.message}:\n\n${JSON.stringify(
      //   response.data
      // )}`;

      const documentationRequest = requestData.message;


      const generatedDocumentation = await this.assistant.getBardResponse(
        documentationRequest
      );

      const response = {
        text: generatedDocumentation.content
      };

      const jsonObject = JSON.stringify(response);

      return jsonObject;
    } catch (error) {
      console.error('Error generating documentation:', error.message);
      throw error;
    }
  }
}

module.exports = ConnectionAPiService;
