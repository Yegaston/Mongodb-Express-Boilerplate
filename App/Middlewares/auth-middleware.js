const Axios = require("axios").default;

// This middleware check if token is valid and if is, save the user in the req, if you needed after.
const checkTokenAndGetUser = (req, res, next) => {
  const config = {
    headers: {
      Authorization: req.headers["authorization"],
    },
  };
  const _url = `${process.env.AUTH_SERVICE_URL}/auth/is`;

  Axios.get(_url, config)
    .then((response) => {
      console.log(response);
      const data = response.data;
      if (data.error) {
        res
          .json({
            data: data.data,
            error: true,
            message: data.message,
            meta: data.meta,
          })
          .status(response.status);
      } else {
        req.user = data.data;
        next();
      }
    })
    .catch((error) => {
      console.error(error);
      if (error.response.status === 401) {
        res
          .json({
            data: error.response.data.data,
            error: true,
            message: error.response.data.message,
            meta: error.response.data.meta,
          })
          .status(response.status);
      }
      res
        .json({
          data: error,
          error: true,
          message: "Ups, strange error.",
          meta: {},
        })
        .status(400);
    });
};

module.exports = { checkTokenAndGetUser };
