export const response = (res, statusCode = 200, payload) => {
  res.status(statusCode).json({
    success: true,
    data: payload
  })
}

export const responseError = (res, statusCode = 500, payload) => {
  res.status(statusCode).json({
    success: false,
    message: payload
  })
}