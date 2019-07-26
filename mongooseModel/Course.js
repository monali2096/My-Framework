var schema=new Schema({
    
    courseId:String,
    courseName: String,
    courseNo:Number,
    
    //courseDesc:String
    

})
export default mongoose.model("Course", schema)