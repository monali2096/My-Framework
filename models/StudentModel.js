import DivisionModel from "./DivisionModel"

export default {
    /**
     * This function adds one to its input.
     * @param {number} input any number
     * @returns {number} that number, plus one.
     */
    search: async function(_query, callback) {
        const students = await Student.find().exec()
        callback(null, students)
    },
    getOne(data, callback) {
        Student.findOne({
            _id: data.id
        }).exec(callback)
    },
    saveData: (data, callback) => {
        const student = new Student(data)
        student.save(callback)
    },
    getOne(data, callback) {
        Course.findOne(data).exec(callback)
    },
    getAll(data, callback) {
        Student.find(data).exec(callback)
    },

    populateData: (data, callback) => {
        Student.aggregate([
            { $match: { name: "monali" } },
            { $skip: 5 }
            //{ $count: "count" }
        ]).exec(callback)
    },
    /**
     * data : {divisionName:"abc"}
     */
    asyncFunctionalityWaterfall: (data, callback) => {
        async.waterfall(
            [
                function(callback) {
                    DivisionModel.getOne({ name: data.divisionName }, callback)
                },
                function(division, callback) {
                    console.log(division)
                    StudentModel.getAll({ division: division._id }, callback)
                }
            ],
            callback
        )
    },
    asyncFunctionalityParallel: (data, callback) => {
        async.parallel(
            {
                division: function(callback) {
                    DivisionModel.findStudent({}, callback)
                },
                student: function(callback) {
                    StudentModel.getAll({}, callback)
                }
            },
            callback
        )
    },
    asyncFunctionWhilst: (data, callback) => {
        var count = 0

        async.whilst(
            function test() {
                return count < 5
            },
            function iter(callback) {
                console.log("in function intr ", count)

                count++
                setTimeout(function() {
                    callback(null, count)
                }, 1000)
            },
            function(err, n) {
                console.log("in error ", count)
                callback(err, n)
            }
        )
    },
    getLimitedStudent: (data, callback) => {
        console.log(
            "data.page * data.limit ",
            data.page,
            data.limit,
            data.page * data.limit
        )
        Student.find({})
            .limit(data.limit)
            .skip(data.page)
            .exec(callback)
    },
    getLimitedStudents: (data, callback) => {
        var isDone = true
        var page = 0
        async.whilst(
            function test() {
                return isDone
            },
            function iter(callback) {
                data.page = data.limit * page

                StudentModel.getLimitedStudent(data, function(err, data) {
                    console.log(page, data)
                    page++
                    if (_.isEmpty(data)) {
                        isDone = false
                    }
                    callback(err, data)
                })
            },
            function(err, Student) {
                console.log("in error", page)
                callback(err, Student)
            }
        )
    }
}
//find({}, { name: 1 }).exec(callback)
