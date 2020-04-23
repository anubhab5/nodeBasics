const express = require("express");
const router = express.Router();
const { getRentalDetail, saveRenatlDetail } = require("../service/rental.svc");

router.get("/", async (req, res) => {
  const result = await getRentalDetail();
  res.send(result);
});

router.post("/", async (req, res) => {
  const result = await saveRenatlDetail(req.body.customerId, req.body.movieId);
  res.send(result);
});

module.exports = router;
