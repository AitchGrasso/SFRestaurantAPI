const express = require('express')
const app = express()
const PORT = 3000

const sfRestaurants = {
    'good luck dim sum': {
        'address': 'lorem',
        'specialty': 'dim sum',
        'photoLocation': 'img',
        'photoFood': 'img'
    },
    'other': {
        'address': 'lorem',
        'specialty': 'dim sum',
        'photoLocation': 'img',
        'photoFood': 'img'
    },
    'again': {
        'address': 'lorem',
        'specialty': 'dim sum',
        'photoLocation': 'img',
        'photoFood': 'img'
    },
    'sumthing': {
        'address': 'lorem',
        'specialty': 'dim sum',
        'photoLocation': 'img',
        'photoFood': 'img'
    },
}

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (req, res) => {
    const sfRestaurantName = req.params.name.toLowerCase()
    if( sfRestaurants[sfRestaurantName]){
        res.json(sfRestaurants[sfRestaurantName])
    }else{
        res.json('rapper unknown')
    }
    
})

app.listen(PORT, () => {
    console.log(`The server is now running on port ${PORT}! Betta go catch it!`)
})