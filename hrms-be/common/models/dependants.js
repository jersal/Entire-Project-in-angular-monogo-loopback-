'use strict';

module.exports = function(Dependants) {
    Dependants.getDependants = function(req, callback) {
        if(!req.accessToken.id){
          return callback.status(401).send(err);
        }
        Dependants.findOne({where: {userId : req.params.id}}, function(err, getDependantsDetails){
          if (err) return callback.status(401).send(err);
            console.log(getDependantsDetails);
            callback(null, getDependantsDetails);
        })
    };

      Dependants.remoteMethod(
        'getDependants',
        {
          http: { path: '/getDependants/:id', verb: 'get' },
          accepts: [{ arg: 'req', type: 'object', http: { source: 'req' } }],
          returns: { type: 'object', root: true }
        });


        
        Dependants.postDependants = function(req, callback) {
        if(!req.accessToken.id){
          return callback.status(401).send(err);
        }
        req.body.userId = req.params.id;
        Dependants.upsertWithWhere({userId : req.params.id},req.body,function(err, postDependantsDetails){
          if (err) return callback.status(401).send(err);
            console.log(postDependantsDetails);
            callback(null, postDependantsDetails);
        })
      };

       Dependants.remoteMethod(
        'postDependants',
        {
          http: { path: '/postDependants/:id', verb: 'post' },
          accepts: [{ arg: 'req', type: 'object', http: { source: 'req' } }],
          returns: {type: 'object', root: true  }
        });
};
