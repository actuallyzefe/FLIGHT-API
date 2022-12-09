const fs = require("fs");
const Flight = require("../models/ticketModel");
const ticketsData = JSON.parse(fs.readFileSync("./data/dev-data.json"));

exports.getAllFlights = async (req, res) => {
  try {
    const tickets = await Flight.find();
    res.status(200).json({
      status: "Success",
      results: tickets.length,
      data: tickets,
    });
  } catch (err) {
    res.status(400).json({
      status: "Error",
      message: err,
    });
  }
};