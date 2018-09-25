const fs = require('fs')
const Hjson = require('hjson');
const express = require('express')
const router = express.Router()
const apiConfig = require('./apiConfig.js')

const readJson = (filePath) => {
  return new Promise(resolve => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      const parseData = Hjson.parse(data, { to: 'json', jsonSpace: '  '  })
      resolve(parseData)
    })
  })
}

apiConfig.api.forEach(api => {
  router[api.method](api.endPoint, function (req, res, next) {
    const { headers, body } = req
    readJson('./routes/mock/' + api.json).then(data => {
      setTimeout(() => {
        console.log('send')
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.json(data)
      }, 10000);
    })
  })
});

module.exports = router
