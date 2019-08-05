import Student from "./Student"

var schema = new Schema({
    name: String,
    parent: String,
    email: String,
    // division: {
    //     type: Schema.Types.ObjectId,
    //     ref: "Division",
    //     index: true
    // },
    course: {
        type: Schema.Types.ObjectId,
        ref: "Course",
        index: true
    }
})
export default mongoose.model("Student", schema)
