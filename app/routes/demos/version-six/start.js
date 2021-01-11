module.exports = function(router, myPath) {
  router.get('/' + myPath + '/start', function (req, res) {
    res.render(myPath + '/start',{
    })
  })
}

