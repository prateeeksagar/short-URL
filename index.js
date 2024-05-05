const express = require('express')
const { connectToMongoDB } = require('./mongo_connect')
const urlRoute = require('./routes/url')
const URL = require('./models/url')

const app = express()
const PORT = 8001

connectToMongoDB('mongodb://127.0.0.1:27017/short-url')
    .then(() => console.log('Mongo Connected'))
    .catch((error) => console.log(error))

app.use(express.json());

app.use('/url', urlRoute)

app.get('/:shortId', async (req, res) => {
    try {
        const shortId = req.params.shortId;
        const entry = await URL.findOneAndUpdate({
            shortId
        },
            {
                $push: {
                    visitHistory: {
                        timestamp: Date.now()
                    },
                }

            }

        )
        res.redirect(entry.redirectUrl)
    } catch (error) {
        console.log(error)
        res.send('Something went wrong')
    }
})


app.listen(PORT, () => {
    console.log(`Server started at ${PORT}`)
})