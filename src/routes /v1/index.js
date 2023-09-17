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

const inventoryRouter = require("./inventory.route")
const recipeRouter = require("./recipe.route")
const eventRouter = require("./event.route")
const ticketRouter = require("./ticket.route")
const subscriptionRouter = require("./subscription.route")
const vehicleRouter = require("./vehicle.route")
const rentalRouter = require("./rental.route")
const forumRouter = require("./forum.route")
const pollRouter = require("./poll.route")
const surveyRouter = require("./survey.route")

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

router.use("/inventory",inventoryRouter);
router.use("/recipe",recipeRouter);
router.use("/event",eventRouter);
router.use("/ticket",ticketRouter);
router.use("/subscription",subscriptionRouter);
router.use("/vehicle",vehicleRouter);
router.use("/rental",rentalRouter);
router.use("/forum",forumRouter);
router.use("/poll",pollRouter);
router.use("/survey",surveyRouter);

module.exports = router
