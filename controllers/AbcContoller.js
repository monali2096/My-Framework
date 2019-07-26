const router = Router()
router.get("/", (req, res) => {
    StudentModel.search(req.query, res.callback)
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
        StudentModel.getOne(req.params, res.callback)
    }
)
router.post("/", (req, res) => {
    StudentModel.saveData(req.body, res.callback)
})
router.put("/:id", (req, res) => {
    StudentModel.updateData(req.params, req.body, res.callback)
})
router.delete("/:id", (req, res) => {
    StudentModel.deleteData(req.params, res.callback)
})
router.post("/count", (req, res) => {
    StudentModel.count(req.body, res.callback)
})
router.delete("/:id", (req, res) => {
    StudentModel.delete(req.params, res.callback)
})
router.post("/find", (req, res) => {
    StudentModel.findData(req.body, res.callback)
})
export default router
