const express = require("express");
const reviewRouter = require("./review.route");
const commentRouter = require("./comment.route")
const tagRouter = require("./tag.route")
const blogRouter = require("./blog.route")
const invoiceRouter = require("./invoice.route")
const paymentRouter = require("./payment.route")
const employeeRouter = require("./employee.route")
const supplierRouter = require("./supplier.route")
const buyerRouter = require("./buyer.route")
const customerRouter = require("./customer.route")
const router = express.Router()

router.use("/review",reviewRouter);
router.use("/comment",commentRouter);
router.use("/tag",tagRouter);
router.use("/blog",blogRouter);
router.use("/invoice",invoiceRouter);
router.use("/payment",paymentRouter);
router.use("/employee",employeeRouter);
router.use("/supplier",supplierRouter);
router.use("/buyer",buyerRouter);
router.use("/customer",customerRouter);


module.exports = router
