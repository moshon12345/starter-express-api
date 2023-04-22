const express = require('express')
const app = express()


app.all('/', (req, res) => {
    console.log("Just got a request!")
    res.send('Yo!')
})

const blugi = {
    "name": "Blugi"
}

app.get('/TESTING', sendBackData); 
app.get('/TESTING2', sendBackData2);


function sendBackData2(req, res) {
    res.send(blugi)
}

function sendBackData(req, res) {
        // res.send(blugi)
        let url = "https://catfact.ninja/fact";

        fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => response.json())
            .then((data) => {

                // this.ruki = data;
                res.send(data)
            })

            .catch((error) => {
                console.error("Error:", error);

            });
        }

app.listen(process.env.PORT || 3000)

