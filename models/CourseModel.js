export default {
    /**
     * This function adds one to its input.
     * @param {number} input any number
     * @returns {number} that number, plus one.
     */
    search: async function(_query, callback) {
        const cour = await Course.find().exec()
        callback(null, cour)
    },
    getOne(data, callback) {
        Course.findOne({
            _id: data.id
        }).exec(callback)
    },
    saveData: (data, callback) => {
        const cour = new Course(data)
        Course.save(callback)
    },
    lodashFunctions: (data, callback) => {
        var obj = {}
        obj.each = _.each(data, function(n) {
            n.type = "demo"
        })

        callback(null, obj)
    }
}
