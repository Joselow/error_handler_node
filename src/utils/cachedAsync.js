export const catchAsync = (asyncFunction) => {
  return (req, res, next) => {
    asyncFunction(req, res)
      .catch((error) => {
        next(error);
      });
  };
};
