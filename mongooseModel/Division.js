var schema = new Schema({
    name: String,
    parent: String,
    email: String,
    rollno: String,
    div: String
})
export default mongoose.model("Division", schema)
