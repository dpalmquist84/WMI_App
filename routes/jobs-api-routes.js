var db = require("../models");

module.exports = function(app) {

	app.get("/api/jobs", function(req, res) {
    db.Jobs.findAll({}).then(function(dbJobs) {
      res.json(dbJobs);
    });
  });

	app.post("/api/jobs", function(req, res) {
    db.Jobs.create({
      name: req.body.name,
      active: true
    }).then(function(dbJobs) {  
      res.json(dbJobs);
    });
  });

  app.delete("/api/jobs/:id", function(req, res) {
    db.Jobs.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbJobs) {
      res.json(dbJobs);
    });
  });

  app.put("/api/jobs/deactivate/:id", function(req, res) {
    db.Jobs.update({
      active: false
    }, {
      where: {
        id: req.params.id
      }
    }).then(function(dbJobs) {
      res.json(dbJobs);
    });
  });

  app.put("/api/jobs/activate/:id", function(req, res) {
    db.Jobs.update({
      active: true
    }, {
      where: {
        id: req.params.id
      }
    }).then(function(dbJobs) {
      res.json(dbJobs);
    });
  });

};