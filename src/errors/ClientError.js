export class ClientError extends Error{
  constructor(msg, status = 400) {
    super(msg)
    this.statusCode = status
  }
}