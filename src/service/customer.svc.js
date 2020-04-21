const mongoose = require("mongoose");
const { customerSchema } = require("../schema/customer.schema");

const Customer = mongoose.model("customer", customerSchema);

async function createCustomer(customerObj) {
  let custObj = new Customer({
    name: customerObj.name,
    isGold: customerObj.isGold,
    phone: customerObj.phone,
  });
  return await custObj.save();
}

async function getCustomer() {
  return await Customer.find().sort("name");
}

async function getCustomerById(id) {
  return await Customer.findById(id);
}

async function updateCustomerById(id, customerObj) {
  let cust = await Customer.findById(id);
  cust.name = customerObj.name;
  cust.isGold = customerObj.isGold;
  cust.phone = customerObj.phone;
  return await cust.save();
}

async function deleteCustomerById(id) {
  return await Customer.findByIdAndRemove(id);
}

module.exports = {
  deleteCustomerById: deleteCustomerById,
  updateCustomerById: updateCustomerById,
  getCustomerById: getCustomerById,
  getCustomer: getCustomer,
  saveCustomer: createCustomer
};
