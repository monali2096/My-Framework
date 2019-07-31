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
    }
}
