//imports required dependencies
const express = require("express");
const route = express.Router();
const controller = require("./controller");

//route to post data into partner table
route.post("/partner", controller.postPartners);

//route to post data into contact table
route.post("/contact", controller.postContact);

//route to get data from contact table
route.get("/contacts", controller.getContacts);

//route to post data into sponsors table
route.post("/sponsor", controller.postSponsor);

//route to post data into hackathons table
route.post("/hackathon", controller.postHackathons);

//route to get data from upcomingEvents table
route.get("/events", controller.getUpcomingEvents);

module.exports = route;
