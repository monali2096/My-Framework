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

<<<<<<< HEAD
    populateData1: (data, callback) => {
        Student.findOne({
=======
    populateData: (data, callback) => {
        console.log("in student model ", data)
        Student.find({
>>>>>>> 3bd499b017439e3664d406be313a12c35a322072
            _id: data.id
        })
            .populate("course")
            .exec(callback)
    }
}
