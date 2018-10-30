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
        //  let pesticidesList = pesticides.slice(10);
         let pesticidesList = pesticides.filter(pesticide => pesticide.classific == 'Federal Restricted');
         res.render("pesticides/index", {pesticidesList});
      })
      .catch(error => {
        console.log(`An error has occured: ${error}`)
      });
   },
   show(req, res, next) {
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
       let pesticideItem = pesticide[0];
       console.log(pesticideItem)
       res.render("pesticides/show", {pesticideItem});
    })
    .catch(error => {
      console.log(`An error has occured: ${error}`)
    });
   }
   
}