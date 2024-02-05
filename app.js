//Hello Express => $ node app.js

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
	let myJson = { "Hello": "World"}
	res.json(myJson)
	// res.send('Hello World!')
	})

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`)
	})
