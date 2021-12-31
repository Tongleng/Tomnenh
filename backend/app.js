const express = require('express')
const mongoose = require('mongoose')

const userRoutes = require('./routes/user-routes')
const serviceRoutes = require('./routes/service-route')
const contactRoutes = require('./routes/contact-route')
const aboutRoutes = require('./routes/about-route')

const sliderRoutes = require('./routes/slider-route')
const corporationRoutes = require('./routes/corporation-route')
const productRoutes = require('./routes/product-route')

const HttpError = require('./models/http-error')
const port = 3002


const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())

// Handling CORS Error (CORS is the Security Concept in Browser)
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');

  next();
});

/* ======> Pages <====== */
app.use('/api/users', userRoutes)
app.use('/api/service', serviceRoutes)
app.use('/api/contact', contactRoutes)
app.use('/api/about', aboutRoutes)

/* ======> Components <====== */
app.use('/api/slider', sliderRoutes)
app.use('/api/corporation', corporationRoutes)
app.use('/api/product', productRoutes)





// Handling Route Error
app.use((req, res, next) => {
    const error = new HttpError('Could not found the route', 404)
    return next(error)
})

// Handling Unknonw Error
app.use((error, req, res, next) => {
    if(res.headerSent) {
        return next(error)
    }
    res.status(error.code || 500)
    res.json({ message: error.message || 'An unknown error occured'})
})

const dbUrl = 'mongodb+srv://leng:leng@cluster0.sd5av.mongodb.net/my_mern?retryWrites=true&w=majority'

mongoose
    .connect(dbUrl)
    .then(() =>{
        app.listen(port, () => {
            console.log(`Server created at port ${port}`)
        })
    })
    .catch((err) => {
        console.log(err)
    })