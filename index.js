const express = require('express')
const app = express()


app.all('/', (req, res) => {
    console.log("Just got a request!")
    res.send('Yo!')
})

app.get('/TESTING2', sendBackData2);

function sendBackData2(req, res) {
    res.send(blugi)
}

app.listen(process.env.PORT || 3000)

