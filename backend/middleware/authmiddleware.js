const protect = async (req, res, next) => {
  let token;
  console.log(req.headers.authorization.split(" ")[1]);
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer") &&
    req.headers.authorization.split(" ")[1] !== "null"
  ) {
    token = req.headers.authorization.split(" ")[1];
    console.log(token);

    req.user = "Satyam";

    next();
  }

  if (!token) {
    res.send("Please! login");
  }
};

module.exports = { protect };
