const axios = require("axios");
const { BardAPI } = require("bard-api-node");
const cheerio = require("cheerio");

class ConnectionAPiService {
  constructor(apiKey) {
    this.assistant = new BardAPI();
    this.apiKey = apiKey;
  }

  async initializeAssistant() {
    try {
      await this.assistant.setSession("__Secure-1PSID", this.apiKey);
    } catch (error) {
      console.error("Error generating session:", error.message);
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
      console.error("Error generating simple response:", error.message);
      throw error;
    }
  }
}

module.exports = ConnectionAPiService;
