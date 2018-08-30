'use strict';

module.exports = function(Personal) {

	Personal.getPersonal = function(req, callback) {
        if(!req.accessToken.id){
          return callback.status(401).send(err);
        }
        Personal.findOne({where: {userId : req.params.id}}, function(err, profileDetails){
          if (err) return callback.status(401).send(err);
            callback(null, profileDetails);
        })
    };

      Personal.remoteMethod(
        'getPersonal',
        {
          http: { path: '/getPersonal/:id', verb: 'get' },
          accepts: [{ arg: 'req', type: 'object', http: { source: 'req' } }],
          returns: { type: 'object', root: true }
        });


      Personal.postPersonal = function(req, callback) {
        if(!req.accessToken.id){
          return callback.status(401).send(err);
        }
        req.body.userId = req.params.id;
        Personal.upsertWithWhere({userId : req.params.id},req.body,function(err, userDetails){
          if (err) return callback.status(401).send(err);
            console.log(userDetails);
            callback(null, userDetails);
        })
        
      };

       Personal.remoteMethod(
        'postPersonal',
        {
          http: { path: '/postPersonal/:id', verb: 'post' },
          accepts: [{ arg: 'req', type: 'object', http: { source: 'req' } }],
          returns: { type: 'object', root: true  }
        });
};
