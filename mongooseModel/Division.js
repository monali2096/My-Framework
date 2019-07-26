var schema = new Schema({
    name: String,
    parent: String,
    email: String,
    rollno: Number,
    div: String,
    division: {
        type: Schema.Types.ObjectId,
        ref: "Student",
        index: true
    }
})
export default mongoose.model("Division", schema)
