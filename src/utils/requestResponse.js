export const response = (res, statusCode = 200, payload) => {
  res.status(statusCode).json({
    success: true,
    data: payload
  })
}