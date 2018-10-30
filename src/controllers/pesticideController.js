const fetch = require('node-fetch');

module.exports = {
   index(req, res, next){
      let url = "https://data.hawaii.gov/resource/ufr5-uv4x.json"
      fetch(url)
      .then( response => {
         if(response.ok){
            return response.json()
          }
          else{
            return Promise.reject('Something went wrong!')
          }
      })
      .then(pesticides => {
         pesticides.splice(10, 990);
         console.log(pesticides[0].product_no)
         res.render("pesticides/index", {pesticides});
      })
   },
   show(req, res, next){
      let url = "https://data.hawaii.gov/resource/ufr5-uv4x.json?eparegisno="
      fetch(`${url}${req.params.id}`)
      .then( response => {
         if(response.ok){
            return response.json()
          }
          else{
            return Promise.reject('Something went wrong!')
          }
      })
      .then(pesticide => {
         console.log(pesticide[0].eparegisno);
         let pesticideItem = pesticide[0]
         res.render("pesticides/show", {pesticideItem});
      })
   }
}