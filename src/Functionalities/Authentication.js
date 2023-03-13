const StatusCodes = require("./StatusCodes");

module.exports = class Authenticaton {
  static async registerUser(username, email, password) {
    try {
      const response = await fetch("http://localhost:4000/register", {
        method: "POST",
        body: JSON.stringify({ username, email, password }),
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });
      const statusCode = response.status;
      const data = await response.json();

      return StatusCodes.checkStatusCode(statusCode, data);
    } catch (error) {
      return { error: true, msg: "Please check your internet connection" };
    }
  }
  static async loginUser(username, password) {
    const response = await fetch("http://localhost:4000/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });
    const statusCode = response.status;
    const data = await response.json();

    return StatusCodes.checkStatusCode(statusCode, data);
  }

  
};
