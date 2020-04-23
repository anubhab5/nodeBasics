const mongoose = require("mongoose");
const { rentalSchema } = require("../schema/rental.schema");
const { getCustomerById } = require("./customer.svc");
const { getMovieById } = require("./movie.svc");
const Fawn = require("fawn");

const Rental = mongoose.model("rental", rentalSchema);

Fawn.init(mongoose);

async function saveRenatlDetail(customerId, movieId) {
  const customer = await getCustomerById(customerId);
  if (!customer) return { status: 404, message: "Customer Not Found" };

  const movie = await getMovieById(movieId);
  if (!movie) return { status: 404, message: "Movie Not Found" };

  let rental = new Rental({
    customer: {
      _id: customer._id,
      name: customer.name,
      isGold: customer.isGold,
      phone: customer.phone,
    },
    movie: {
      _id: movie._id,
      title: movie.title,
      dailyRentalRate: movie.dailyRentalRate,
    },
  });

  try {
    new Fawn.Task()
      .save("rentals", rental)
      .update(
        "movies",
        { _id: movie._id },
        {
          $inc: {
            numberInStock: -1,
          },
        }
      )
      .run();
      return rental;
  } catch (err) {
      console.log(err);
      return {status: 500, message: "Some Error occured"}
  }

//   const rentalResult = await rental.save();
//   movie.numberInStock -= 1;
//   await movie.save();
}

async function getRentalDetail() {
  return await Rental.find().sort("-dateOut");
}

module.exports = {
  saveRenatlDetail: saveRenatlDetail,
  getRentalDetail: getRentalDetail,
};
