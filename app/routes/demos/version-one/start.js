module.exports = function(router, myPath) {
  router.get('/' + myPath + '/start', function (req, res) {
    res.render(myPath + '/start',{
    })
  })

  router.post('/' + myPath + '/start', function (req, res) {

 
   })

}

