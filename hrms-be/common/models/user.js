'use strict';

module.exports = function(User) {
	var globalToken;
    var app = require('../../server/server');
	
	
  User.userLogin = function (request, callBack) {
    let loginId, accessToken, loggedInUser;
    let accessTokenId;
    User.login(request.body).then(response => {
      globalToken = response;  
      loginId = response.id;
      return User.roleCheck({ accessTokenId: loginId });
    }).then(roleName => {
      // let role = roleName ? roleName : '';
      let role = roleName;
      accessToken = { accessTokenId: loginId, role: role };
      return;
    }).catch(err => {
      console.log('err');
    }).then(done => {
      return User.findOne({ 'where': { 'email': request.body.email } });
    }).then(usr => {
      loggedInUser = usr;
    }).then(done => {
      callBack(null, {
        accessToken: accessToken.accessTokenId,
        passwordReset: loggedInUser.passwordReset,
        role: accessToken.role,
        userId: loggedInUser.id
      });
    }).catch(err => {
      callBack(err);
    });
  };


   User.roleCheck = function (accessTokenObject) {
    return app.models.AccessToken.findById(accessTokenObject.accessTokenId).then(accessToken => {
      return User.findById(accessToken.userId);
    }).then(usr => {
      if (usr) {
        return User.findRoleName({ 'userId': usr.id });
      }
    }).then(roleName => {
      // let role = (roleName && roleName === 'admin') ? roleName : '';
      let role = roleName;
      return Promise.resolve(role);
    }).catch(err => {
      console.log('err');
    });
  };

  User.findRoleName = function (usr) {
    console.log(usr.userId);
    return app.models.RoleMapping.findOne({ 'where': { 'principalId': usr.userId } }).then(mapping => {
      if (!mapping) {
        console.log('error');
      }
      return app.models.Role.findById(mapping.roleId);
    }).then(role => {
      // let roleName = role ? role.name : '';
      let roleName = role;
      return Promise.resolve(roleName);
    }).catch(err => {
      return Promise.resolve('');
    });
  };


    User.remoteMethod(
    	'userLogin',
    	{
    		http: { path: '/userLogin', verb: 'post' },
    		accepts: [{ arg: 'req', type: 'object', http: { source: 'req' } }],
    		returns: { type: 'object', root: true  }
    	});

	User.userlogout = function(req, callback) {
		User.logout(req.params.token, function (err) {
			console.log(err || 'Logged out');
			callback(null,true);
		});
    };

    User.remoteMethod(
    	'userlogout',
    	{
    		http: { path: '/userlogout/:token', verb: 'get' },
    		accepts: [{ arg: 'req', type: 'object', http: { source: 'req' } }],
    	});

     User.userChangePassword = function(req, res) {
      if(!req.accessToken.id){
          return res.status(401).send(err);
      }
      console.log(req.accessToken)
      User.changePassword(req.accessToken.userId, req.body.oldPassword, req.body.newPassword, function (err) {
        if (err) return res(err);
        User.findById(req.accessToken.userId, function(err,user) {
        if (err) return res.status(401).send(err);
        user.updateAttribute('passwordReset', false, function(err, userInstance) {
          if (err) return res.status(401).send(err);
          console.log('> password change request processed successfully');
          res(null,true);
        });
      });
      })
    };


    User.remoteMethod(
    	'userChangePassword',
    	{
    		http: { path: '/userChangePassword', verb: 'post' },
    		accepts: [{ arg: 'req', type: 'object', http: { source: 'req' } }]
    	});




};
