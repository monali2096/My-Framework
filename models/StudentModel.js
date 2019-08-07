import DivisionModel from "./DivisionModel"

export default {
    /**
     * This function adds one to its input.
     * @file http://localhost:3000/Student/search
     * @param {number} input any number
     * @returns {number} that number, plus one.
     */
    search: async function(_query, callback) {
        const students = await Student.find().exec()
        callback(null, students)
    },
    /**
     *This function finds one user id.
     * @param {object} data  user object with student_id
     * @param {*} callback get response of one student
     */
    getOne(data, callback) {
        Student.findOne({
            _id: data.id
        }).exec(callback)
    },
    /**
     *
     * save the all data of students
     * @param {object} data object request with name,parent,email.
     *@param {*} callback  to get response save all the Student records in student table
     */
    saveData: (data, callback) => {
        const student = new Student(data)
        student.save(callback)
    },
    getOne(data, callback) {
        Division.findOne(data).exec(callback)
    },
    getOne(data, callback) {
        Student.findOne(data).exec(callback)
    },
    /**
     * Description
     * Retrive all the data of students.
     * @param {object} data object request with student_id
     * @return {*} callback  to get response of all the Students
     */
    getAll(data, callback) {
        Student.find(data).exec(callback)
    },
    /**
     * This function populate the  student record with division details of  that student
     * @param {object} user object with student id
     * @return{*} callback populate all division details in student data.
     */
    populateData: (data, callback) => {
        Student.find({ _id: data.id })
            .populate("division")
            .exec(callback)
    },

    /**
     * This is the async waterfall function.
     * @param {object} Retrive one name of the division table.
     * @return {array} Retrive all the division id .
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

    asyncWaterfall: (data, callback) => {
        async.waterfall(
            [
                function(callback) {
                    StudentModel.getOne({ parent: data.parent }, callback)
                },
                function(students, callback) {
                    console.log(students)
                    StudentModel.getAll({ students: students._id }, callback)
                }
            ],

            callback
        )
    },
    /**
     * This is the async parallel function. In this function run the task in parallel.
     * @file http://localhost:3000/Student/asyncFunctionalityParallel
     *@param {object} find all the deatails of the student in division.
     @return {*} callback
     */
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

    asyncParallel: (data, callback) => {
        async.parallel(
            {
                division: function(callback) {
                    DivisionModel.findAll({}, callback)
                },
                Student: function(callback) {
                    StudentModel.getAll({}, callback)
                }
            },
            callback
        )
    },
    /**
     * This is the async whilst function.in this function .
     * @param {number} input any number
     * @return {number} callback
     */
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
    /**
     * Description
     * retrieve the student data of the Limited Students
     * @param {Number} data object request with limit
     * @param {object} callback using limit get response  of all the Student records.
     */
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
    },
    /**
     *Find all data of students and all the divisions concat with student in series
     */
    asyncConcatSeries: (data, callback) => {
        async.waterfall(
            [
                function(callback) {
                    Student.find({})
                        .lean()
                        .exec(callback)
                },
                function(student, callback) {
                    console.log("student:::::::::::::", student)
                    async.concatSeries(
                        student,

                        function(stud, callback) {
                            Division.find({
                                student: stud._id
                            }).exec(function(err, division) {
                                if (division) {
                                    stud.division = division
                                    callback(null, stud)
                                } else {
                                    callback
                                }
                            })
                        },
                        callback
                    )
                }
            ],
            callback
        )
    },
    // array
    asyncConcat: (data, callback) => {
        // console.log("data in", data)
        var order = []
        var array = [1, 3, 2]
        var iterator = function(num, done) {
            setTimeout(function() {
                order.push(num)
                done(null, [num])
            }, num * 10)
        }
        async.concat(array, iterator, function(err, res) {
            console.log(res) // [1, 2, 3];
            console.log(order) // [1, 2, 3]
        }),
            callback
    },
    //concatseries//
    // asyncConcatSeries: (data, callback) => {
    //     var order = []
    //     var array = [1, 3, 2]
    //     var iterator = function(num, done) {
    //         setTimeout(function() {
    //             order.push(num)
    //             done(null, [num])
    //             //console.log("data in", num)
    //         }, num * 10)
    //     }
    //     async.concatSeries(array, iterator, function(err, res) {
    //         console.log(res) // [1, 3, 2];
    //         console.log(order) // [1, 3, 2]
    //     }),
    //         callback
    // },
    // each function//
    asyncEach: (data, callback) => {
        var order = []
        var array = [1, 3, 2]
        var iterator = function(num, done) {
            setTimeout(function() {
                order.push(num)
                console.log("num in", num)

                done()
            }, num * 10)
        }
        async.each(array, iterator, function(err, res) {
            console.log(res) // undefined
            console.log(order) // [1, 2, 3]
        }),
            callback
    }
}
