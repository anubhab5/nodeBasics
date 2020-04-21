const express = require("express");
const {
  saveCustomer,
  getCustomer,
  getCustomerById,
  updateCustomerById,
  deleteCustomerById,
} = require("../service/customer.svc");

const router = express.Router();

router.get("/", async (req, res) => {
  const customerList = await getCustomer();
  res.send(customerList);
});

router.get("/:id", async (req, res) => {
  const customer = await getCustomerById(req.params.id);
  res.send(customer);
});

router.post("/", async (req, res) => {
  const custObj = {
    name: req.body.name,
    isGold: req.body.isGold,
    phone: req.body.phone,
  };
  const result = await saveCustomer(custObj);
  res.send(result);
});

router.put("/:id", async (req, res) => {
  const custObj = {
    name: req.body.name,
    isGold: req.body.isGold,
    phone: req.body.phone,
  };
  const result = await updateCustomerById(req.params.id, custObj);
  res.send(result);
});

router.delete("/:id", async (req, res) => {
  const result = await deleteCustomerById(req.params.id);
  res.send(result);
});

module.exports = router;
