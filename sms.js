module.exports = function(req, res, next){
  req
    .app
    .sms
    .send({
      'to' : req.query.to,
      'body' : req.query.msg
    })
    .then((result) => res.send(result))
    .catch((err) => res.status(err.statusCode || 500).send(err.error || err));
};
