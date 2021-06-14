class HttpError extends Error {
  public httpStatusCode: number;
  public message: string;

  constructor(httpStatusCode: number, message: string) {
    super(message);
    this.httpStatusCode = httpStatusCode;
    this.message = message;
  }

  static notFound(message = 'Not Found') {
    return new HttpError(404, message);
  }
  static unauthorized(message = 'Unauthorized') {
    return new HttpError(401, message);
  }
  static conflict(message = 'Conflict') {
    return new HttpError(409, message);
  }
}

export default HttpError;
