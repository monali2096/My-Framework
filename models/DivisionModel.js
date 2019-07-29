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
    getOne(data, callback) {
        Division.findOne({
            _id: data.id
        }).exec(callback)
    },
    saveData: (data, callback) => {
        const division = new Division(data)
        division.save(callback)
    },
    updateData: (data, bodydata, callback) => {
        Division.findOneAndUpdate(
            { _id: data.id },
            { $set: bodydata },
            {
                new: true
            }
        ).exec(callback)
    },
    deleteData: (data, callback) => {
        Division.deleteOne({ _id: data.id }).exec(callback)
    },
    findData: (data, callback) => {
        Division.find({}, { name: 1 }).exec(callback)
    },
    count: (data, callback) => {
        Division.count({})
            .count()
            .exec(callback)
    }

    //}
    // lodashFunctions: (data, callback) => {
    //     const obj = {}
    //     // obj.last = _.last(data)

    //     //var now = moment()

    //     //var day = moment("2013-02-08 09:30:26 ")
    //     //var date = moment().format("lll")
    //     //var time = moment("YYYY-MM-DD HH:mm")

    //     obj.date = moment().format("LLL")
    //     obj.date2 = moment().format("l")
    //     obj.date3 = moment().format("LTS")
    //     obj.date4 = moment().format("dddd")
    //     obj.cal = moment().calendar()
    //     obj.date5 = moment("20190621", "YYYYMMDD").fromNow()
    //     obj.date6 = moment().format("dddd")

    //     callback(null, obj)
}
