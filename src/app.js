const express = require('express')
const path = require('path')
const app = express()
const port = process.env.PORT || 3000
const publicdirectory = path.join(__dirname, '../public')
app.use(express.static(publicdirectory))

app.get('', (req, res) => {
    res.send('<h1>Home Page</h1>')
})


app.get('/help', (req, res) => {
    res.send([{
        name: 'kanishtha',
        role: 'developer'
    },
    {
        name: 'rajput',
        role: 'developer 1'
    }])
})

app.get('/about', (req, res) => {
    res.send('About page !')
})

app.get('/weather', (req, res) => {
    res.send('Weather page !')
})

app.listen(port, () => {
    console.log('Server is up on port ' + port);
})