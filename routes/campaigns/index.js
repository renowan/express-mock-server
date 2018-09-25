const fs = require('fs')
const express = require('express')
const router = express.Router()

const readJson = (filePath) => {
  return new Promise(resolve => {
    fs.readFile(filePath, (err, data) => {
      resolve(JSON.parse(data))
    })
  })
}

router.get('/myEntryResult', function (req, res, next) {
  const { headers, body } = req
  let response = {
    date: "2018-09-03T03:20:32.873Z",
    result: {
      itemDetailIds: []
    },
    status: 'ok'
  }

  readJson('mock/test.json').then(data => { res.json(data) })

  // res.status(404)
  // setTimeout(() => res.json(response), 500)
})

module.exports = router
