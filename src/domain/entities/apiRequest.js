class APIRequest {
    constructor(responseData, url, timestamp) {
      this.responseData = responseData;
      this.url = url;
      this.timestamp = timestamp;
    }
  }
  
  module.exports = APIRequest;