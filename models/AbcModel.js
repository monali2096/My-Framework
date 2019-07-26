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
    updateData: (data, bodydata, callback) => {
        Student.findOneAndUpdate(
            { _id: data.id },
            { $set: bodydata },
            {
                new: true
            }
        ).exec(callback)
    },
    deleteData: (data, callback) => {
        Student.findOneAndDelete({ _id: data.id }).exec(callback)
    },
    count: async function(data, callback) {
        Student.find({})
            .count()
            .exec(callback)
    },
    delete: (data, callback) => {
        Student.deleteOne({ _id: data.id }).exec(callback)
    },

    findData: (data, callback) => {
        Student.find({}, { email: 1 }).exec(callback)
    }
}
