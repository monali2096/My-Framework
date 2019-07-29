import CourseModel from "../models/CourseModel"

const router = Router()
router.get("/lodash/:id", (req, res) => {
    CourseModel.lodashFunctions(req.body, res.callback)
})


router.get("/", (req, res) => {
    CourseModel.search(req.query, res.callback)
})
router.get(
    "/:id",                
    ValidateRequest({
        params: {
            type: "object",
            properties: {
                id: {
                    type: "string", 
                    format: "objectId"
                }
            }
        }
    }),
    (req, res) => {
        CourseModel.getOne(req.params, res.callback)
    }
)
router.post("/save", (req, res) => {
    CourseModel.saveData(req.body, res.callback)
})
router.put("/:id", (req, res) => {
    CourseModel.updateData(req.params, req.body, res.callback)
})
router.patch("/:id", (req, res) => {
    res.send(`Path For Id ${req.params.id}`)
})
router.delete("/:id", (req, res) => {
    CourseModel.deleteData(req.params,res.callback)
})
export default router
