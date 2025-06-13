const router=require("express").Router()
const WebhookController=require("../Controllers/Webhook")


router.post('/statusChange',WebhookController.statusChange)
module.exports=router