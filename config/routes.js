/**
 * Define Index Routes Here
 */

const router = Router()
router.get("/", (req, res) => {
    res.render("home", {
        name: "Traing My Framework"
    })
})
export default router
