class ApiResponse {
  constructor(statusCode, message, data = null, error = null) {
    this.success = statusCode < 400;
    this.statusCode = statusCode;
    this.message = message;
    this.data = data;
    this.error = error;
  }
}

module.exports = ApiResponse;
