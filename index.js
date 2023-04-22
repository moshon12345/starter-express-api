const express = require('express')
const app = express()
app.all('/', (req, res) => {
    console.log("Just got a request!")
    res.send('Yo!')
})
app.listen(process.env.PORT || 3000)

app.get('/TESTING3', router.get('/TESTING3', function(req, res) {
    const dataStream = got.stream({
        url: 'https://catfact.ninja/fact',
    });
    pipeline(dataStream, res, (err) => {
        if (err) {
            console.log(err);
            res.sendStatus(500);
        }
        // console.log("lugi")
    });
  })); 

  module.exports = router;
