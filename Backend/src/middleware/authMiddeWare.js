import jwt from "jsonwebtoken";

function authMiddleWare(req, res, next) {
  const authHeader = req.headers.token;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    res.status(403).json({
      message: "token is not found or unauthorized",
    });
  }

  try {
    const token = authHeader.split(" ")[1];

    const decode = jwt.verify(token, process.env.SECRET_KEY);

    if (!decode) {
      return res.status(403).json({
        message: "some thing worng sorry decode",
        decode,
      });
    }

    req.userId = decode.userId;
    next();
  } catch (error) {
    return res.status(403).json({
      message: "some thing want wrong",
      error,
    });
  }
}

export { authMiddleWare };
