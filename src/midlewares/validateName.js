import { ClientError } from "../errors/ClientError.js";

export const validateName = (req, res, next) => {
  const { name } = req.query
  const regex = /^[a-zA-Z0-9 ]+$/;
  if (!regex.test(name)) {
    throw new ClientError('Invalid name')
  }

  next()
}