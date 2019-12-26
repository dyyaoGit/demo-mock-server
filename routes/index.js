var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/userList', function(req, res, next) {
  res.json({
    data: [
      {
        name: "服务端名字1",
        sex: '男人',
        birthDay: "2019-08-01"
      }
    ],
    code: 200,
    msg: 'success'
  })
});

module.exports = router;
