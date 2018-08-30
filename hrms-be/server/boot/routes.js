module.exports = function (app) {
  var router = app.loopback.Router();
  var path = require('path');
  var golbalAccessToken;
  var User = app.models.user;


  router.post('/login', function (req, res) {
    console.log(req.body);

    const userCredentials = {
      "email": req.body.email,
      "password": req.body.password
    }

    User.login(userCredentials, 'user', function (err,result, token) {
      if (err) {
        res.status(401).send({ status: 401, message: 'Login error' });
      }

      Log.info({
        "email": userCredentials.email,
        "timestamp": new Date.getTime(),
        "action": "login"
      });

      golbalAccessToken = token;
      const ttl = result.ttl;

      // console.log(token);
      return res.status(200).json(token,ttl);
    });
  });

  app.use(router);
};

