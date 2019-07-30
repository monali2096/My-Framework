import Student from "./Student"

var schema = new Schema({
    name: String,
    parent: String,
    email: String,
    division: {
        type: Schema.Types.ObjectId,
        ref: "Division",
<<<<<<< HEAD
        index: true
    },
    course: {
        type: Schema.Types.ObjectId,
        ref: "Course",
=======
>>>>>>> 3bd499b017439e3664d406be313a12c35a322072
        index: true
    }
})
export default mongoose.model("Student", schema)
