class responseWithData {
  constructor(err = false, message = null, data = null) {
    this.error = err;
    this.msg = message;
    this.userData = data;
  }
}

module.exports = class StatusCodes {
  static checkStatusCode(statusCode, response) {
    const errorStatusCodes = [409, 500, 401, 404];

    //then there is an error
    if (errorStatusCodes.includes(statusCode)) {
      const responseData = new responseWithData(true, response["msg"], "");
      return responseData;
    } else {
      const responseData = new responseWithData(
        false,
        response["msg"],
        response["userData"]
      );

      return responseData;
    }
  }
};
