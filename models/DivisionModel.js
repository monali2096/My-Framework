export default {
    /**
     * This function adds one to its input.
     * @param {number} input any number
     * @returns {number} that number, plus one.
     */
    search: async function(_query, callback) {
        const Div = await Division.find().exec()
        
        callback(null, Div)
    },
    getOne(data, callback) {
        Division.findOne({
            _id: data.id
        }).exec(callback)
    },
    saveData: (data, callback) => {
        const division = new Division(data)
        division.save(callback)
    },
    lodashFunctions: (data, callback) => {
        var obj = {}
        obj.each = _.each(data, function(n) {
            n.type = "demo"
        })

        data = ["one", "two", "three", "four", "five", "six"]
        //var obj = _.chunk(data, 3)
        //console.log(obj)
        //var obj = _.difference([2, 1], [2, 3])

        callback(null, obj)
    }
}
