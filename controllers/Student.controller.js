const Student = require('../models/Student.model');


exports.test = ((req, res) => {
    res.send("Hello from test");
});

exports.student_add = ((req, res) => {

    let student = new Student({
        stdName : req.body.stdName,
        stdAge : req.body.stdAge,
        stdClass : req.body.stdClass,
        stdNumber : req.body.stdNumber,
        stdAddress : req.body.stdAddress 

    });

    student.save((err) => {
        if (err) {
            return next(err);
        }
        res.send("Student added successfully");
    });
});

exports.student_details = ((req, res) => {

    Student.findById(req.params.id, (err, student) => {
        if (err) {
            return next(err);
        }
        res.send(student);
    });
});

exports.student_update = ((req, res) => {

    Student.findByIdAndUpdate(req.params.id, {$set : req.body}, (err) => {
        if (err) {
            return next(err);
        }
        res.send("Student Profile Updated");
    });
});

exports.student_delete = ((req, res) => {

    Student.findByIdAndRemove(req.params.id, (err) => {
        if (err) {
            return next(err);
        }
        res.send("Student Deleted");
    });
});