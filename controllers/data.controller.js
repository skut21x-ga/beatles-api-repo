const res = require('express/lib/response')
const { fetchData } = require('../models/data.model')

exports.getData = (req, res, next) => {
  return fetchData()
    .then((data) => {
      res.status(200).send({ data })
    })
    .catch((err) => {
      console.log(err)
    })
}
