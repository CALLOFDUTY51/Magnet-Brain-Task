const router=require("express").Router()
const PaymentController=require("../Controllers/Payment")
const { db } = require("../Models/Transaction")

router.post('/payment',PaymentController.ProductPayment)
router.get('/transactions',PaymentController.getTransactions)
module.exports=router






