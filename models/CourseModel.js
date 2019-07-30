import { param } from "tslib"

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
        cour.save(callback)
    },
    count: async function(data, callback) {
        Course.find({})
            .count()
            .exec(callback)
    },
    
    updateData: (data, bodydata, callback) => {
        Course.findOneAndUpdate(
            { _id: data.id },
            { $set: bodydata },
            {
                new: true
            }
        ).exec(callback)
    },
    deleteData:(data,callback)=>{
        Course.findOneAndDelete({
            _id: data.id 
        }).exec(callback)
    },
    lodashFunctions: (data, callback) => {
        var obj = {}
        //obj.each = _.each(data, function(n) {
        // n.type = "demo"
        //})

        obj.each1 = _.each(data, function(n) {
            n.type = "date"
        })

        obj.chunk=_.chunk(data,2)
        

        obj.concat=_.concat(data,"supriya")

        
        obj.difference=_.findIndex(data, function(n)
        { 
            n.email == "abcdgmail"
        })

        obj.drop=_.dropRight(data,1)

        obj.join=_.join(["a", "b", "c"], "~")

        callback(null,obj)
    }
  
}
