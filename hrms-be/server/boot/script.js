
// const async = require('async');

// module.exports = function (app, cb) {

//   var User = app.models.user;
//   var Role = app.models.Role;
//   var RoleMapping = app.models.RoleMapping;
//   var Acl = app.models.ACL;
//   var AccessToken = app.models.AccessToken;

 



//   function automigrateItem(item) {
//     return function (cb) {
//       app.dataSources.asidb.automigrate(item, function (err) {
//         err ? cb(err) : (function () {
//           console.log('automigration is done for the following entity => ' + item);
//           cb(null);
//         })();
//       });
//     }
//   }

//   async.parallel([
    
//     automigrateItem('AccessToken'),
//     automigrateItem('Role'),
//     automigrateItem('RoleMapping'),
//     automigrateItem('ACL')
   
//   ],

//     function (err) {

//       if (err) {
//         cb(err);
//       }
//       else {

//         User.create([
//           { email: 'rahul.an@gofreelab.com', password: '12345'},
//           { email: 'gireesh.babu@gofreelab.com', password: 'gireesh'}
//         ],

//           function (err, users) {

//             if (err) return cb(err);

//             console.log('Created users:', users);

//             Role.create({

//               name: 'admin'

//             }, function (err, role) {

//               if (err) return cb(err);

//               console.log('Created role:', role);


//               role.principals.create({
//                 principalType: RoleMapping.USER,
//                 principalId: users[0].id
//               }, function (err, principal) {

//                 if (err) return cb(err);

//                 console.log('Created principal:', principal);

//                 cb(null);

//               });
//             });

//             Role.create({

//               name: 'user'

//             }, function (err, role) {

//               if (err) return cb(err);

//               console.log('Created role:', role);


//               role.principals.create({
//                 principalType: RoleMapping.USER,
//                 principalId: users[1].id
//               }, function (err, principal) {

//                 if (err) return cb(err);

//                 console.log('Created principal:', principal);

//                 cb(null);

//               });
//             });

//           });
//       }
//     });


// };



// module.exports = function (app) {
//     var UserModel = app.models.User;
//     app.post('/userLogin', function (req, res) {		

// 		//parse user credentials from request body
// 		const userCredentials = {
// 			"email": req.body.email,
// 			"password": req.body.password
// 		}

// 		UserModel.userLogin(userCredentials, 'user', function (err, result) {			
// 			if (err) {
// 				//custom logger
// 				Log.error(err);
// 				res.status(401).json({"error": "login failed"});
// 				return;
// 			}

// 			Log.info({
// 				"email": userCredentials.email,
// 				"timestamp": new Date.getTime(),
// 				"action": "login"
//             });
            

//             const access_token = result.id;
// 			const ttl = result.ttl;
// 			res.json({
// 				"token": result.id,
// 				"ttl": result.ttl
// 			});
// 		});
// 	});


// 	// app.post('/userLogout', function (req, res, next) {}
// }











