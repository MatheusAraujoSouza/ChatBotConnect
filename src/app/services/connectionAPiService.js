const axios = require('axios');
const { BardAPI } = require('bard-api-node');
const cheerio = require('cheerio');
var JSSoup = require('jssoup').default;

class ConnectionAPiService {

  constructor(apiKey) {
    this.assistant = new BardAPI();
    this.apiKey = 'bgjGlaVYxSj3xUVRoNHq0HlxHf0_VgxS4oAFJd6tQryS5fVtfRD7kE6CfOH6db20qWEC7A.';
  }

  async initializeAssistant() {
    try {
      await this.assistant.setSession('__Secure-1PSID', this.apiKey);
    } catch (error) {
      console.error('Error generating session:', error.message);
      throw error;
    }
  }

  async generateMiddleResponse(requestData) {
    try {
      await this.initializeAssistant();
      const axiosResponse = await axios.get(requestData.url);
      const soup = new JSSoup(axiosResponse.data, false);
      const text = soup.findAll('lyrics');
      const documentationRequest = `${requestData.message}:\n\n${text}`;
      const generatedDocumentation = this.assistant.getBardResponse(
        documentationRequest
      );
      return generatedDocumentation.content;
    } catch (error) {
      console.error('Error generating documentation:', error.message);
      throw error;
    }
  }

  async generateSimpleReponse(requestData) {
    try {
      await this.initializeAssistant();

      const simpleRequest = requestData.message;

      const generatedResponse = await this.assistant.getBardResponse(
        simpleRequest
      );
      return generatedResponse.content;
    } catch (error) {
      console.error('Error generating simple response:', error.message);
      throw error;
    }
  }
}

module.exports = ConnectionAPiService;
