function globalHandle(req, res, err, next) {
  if (!err) {
    next();
  }
  res.status(404).json({
    massage: "sever crashed",
  });
}

export default globalHandle;
