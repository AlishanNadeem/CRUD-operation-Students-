const { student } = require("../middleware/Schema");

module.exports = {
  studentValidation: (req, res, next) => {
    const { error } = student.validate(req.body);
    if (error) {
      res.send(error.details[0].message);
    }
    next();
  },
};
