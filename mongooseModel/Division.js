var schema = new Schema({
    name: String,
    parent: String,
    email: String,
    rollno: Number,
    div: String
})
export default mongoose.model("Division", schema)
