const eventscontroller = require("../controllers/events.controller");
module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post("/api/v1/events/add",eventscontroller.addEvents);
  app.get('/api/v1/events/list', eventscontroller.eventsList);
  app.get('/api/v1/events/delete/:eId', eventscontroller.delete);
  app.get('/api/v1/events/list/:eId', eventscontroller.findOne);
  app.post('/api/v1/events/update/:eId', eventscontroller.updateEvents);

  
  
};



