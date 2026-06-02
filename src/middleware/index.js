const demo = (req, res, next) => {
  console.log("inside midd");
  next();
};

module.exports = demo;
