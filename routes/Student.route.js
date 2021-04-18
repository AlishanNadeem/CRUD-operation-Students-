const express = require("express");
const router = express.Router();
const student_controller = require("../controllers/Student.controller");
const { studentValidation } = require("../middleware/Validate");

router.get("/test", student_controller.test);

router.post("/add", studentValidation, student_controller.student_add);

router.post("/add/history", student_controller.student_add_history);

router.get("/:id", student_controller.student_details);

router.put("/:id", studentValidation, student_controller.student_update);

router.delete("/:id", student_controller.student_delete);

module.exports = router;
