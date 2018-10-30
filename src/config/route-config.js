module.exports = {
   init(app){
      const staticRoutes = require("../routes/static");
      const pesticideRoutes = require("../routes/pesticide");

      app.use(staticRoutes);
      app.use(pesticideRoutes);
   }
}