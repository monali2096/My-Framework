export default {
    /**
     * This function adds one to its input.
     * @param {number} input any number
     * @returns {number} that number, plus one.
     */
    search: async function(_query, callback) {
        const division = await Division.find().exec()
        callback(null, division)
    },
    /**
     * This function retrive one data in division table.
     * @param {object} data  user object with student_id
     * @param {*} callback get response of one student in division table
     */
    getOne: (data, callback) => {
        Division.findOne(data).exec(callback)
    },
    /**
     *
     * save the all data of students
     * @param {object} data object request with name,parent,email.
     *@param {*} callback  to get response save all the Student records in division table
     */
    saveData: (data, callback) => {
        const division = new Division(data)
        division.save(callback)
    },
    /**
     *
     * @param {object} data object request with name,parent,email,div,rollno.
     * @param {*} callback get response of all students data in division table.
     */
    findAll(data, callback) {
        Division.find(data).exec(callback)
    },

    findStudent: (data, callback) => {
        Division.aggregate([
            // { $match: { name: "suju" } },
            //{ $skip: 5 },

            // { $project: { email: 1, name: 1, stud: 1, rollno: 1 } },

            {
                $facet: {
                    result: [
                        {
                            $lookup: {
                                from: "students",
                                localField: "student",
                                foreignField: "_id",
                                as: "stud"
                            }
                        },
                        {
                            $unwind: {
                                path: "$stud"
                            }
                        }
                    ]
                }
            }
            //{ $sort: { rollno: 1 } }
            // { $limit: 5 }

            // {
            //     $facet: {
            //         result: [
            //             { $match: { name: "supriyakadam" } },
            //             { $skip: 1 },
            //             { $limit: 2 }
            //         ],
            //         count: [
            //             { $match: { name: "supriyakadam" } },
            //             { $count: "count" }
            //         ]
            //     }
            // }
        ]).exec(callback)
    },
    /**
     * This function find and update the records.
     * @param {object} user object with student_id.
     * @return {*} callback get response with updated record in division table.
     */
    updateData: (data, bodydata, callback) => {
        Division.findOneAndUpdate(
            { _id: data.id },
            { $set: bodydata },
            {
                new: true
            }
        ).exec(callback)
    },
    /**
     * This function delete one record of student in division table
     * @param {object} user object with student_id
     * @return {*} callback response of remove of one record in division table
     */
    deleteData: (data, callback) => {
        Division.deleteOne({ _id: data.id }).exec(callback)
    },
    findData: (data, callback) => {
        Division.find({}, { name: 1 }).exec(callback)
    },
    /** This function count the number of records in division table.
     * @param {object} data user object with _id.
     * @return {number} callback number
     */
    count: (data, callback) => {
        Division.count({})
            .count()
            .exec(callback)
    },

    lodashFunctions: (data, callback) => {
        const obj = {}
        obj.last = _.last(data)

        obj.each = _.each(data, function(n) {
            n.type = "demo"
        })

        // data = ["one", "two", "three", "four", "five", "six"]
        obj.chunk = _.chunk(data, 2)
        // console.log(obj)
        //obj.each = _.each("type")
        obj.difference = _.difference([2, 1], [2, 3])

        var now = moment()

        obj.day = moment("2013-02-08 09:30:26 ")
        //     //var date = moment().format("lll")
        //obj.time = moment("YYYY-MM-DD HH:mm")

        //obj.date = moment().format("LLL")
        //obj.date2 = moment().format("l")
        //obj.date3 = moment().format("LTS")
        //     obj.date4 = moment().format("dddd")
        //obj.cal = moment().calendar()
        // obj.date5 = moment("20190621", "YYYYMMDD").fromNow()
        //obj.date6 = moment().format("dddd")

        callback(null, obj)
    }
}
