import Course from "./Course"

var schema = new Schema({
    name: String,
    parent: String,
    email: String,
    division: {
        type: Schema.Types.ObjectId,
        ref: "division",
        index: true
    }
})
export default mongoose.model("Student", schema)
