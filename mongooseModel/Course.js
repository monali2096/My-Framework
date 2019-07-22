var schema=new Schema({
    courseName: String,
    courseId:String
    

})
export default mongoose.model("Course", schema)