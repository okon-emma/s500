// Imports
const express = require('express')
const expressLayouts = require('express-ejs-layouts')

const app = express()
const port = process.env.PORT || 3000

// Static Files
app.use(express.static('public'))
    // Example for other folders - not required
    // app.use('/css', express.static(__dirname + 'public/css'))

// Set Templating Engine
app.use(expressLayouts)
app.set('view engine', 'ejs')

// Routes
app.get('', (req, res) => {
    res.render('home')
})

app.get('/apply', (req, res) => {
    res.render('apply')
})

// Listen on Port 5000
app.listen(port, () => console.info(`App listening on port ${port}`))